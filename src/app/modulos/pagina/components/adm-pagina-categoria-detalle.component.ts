import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IPaginaCategoria } from '../interfaces/pagina.interface';
import { PaginaService } from '../services/pagina.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-adm-pagina-categoria-detalle',
    templateUrl: './adm-pagina-categoria-detalle.component.html',
    styles: []
})
export class AdmPaginaCategoriaDetalleComponent implements OnInit {

    formulario: FormGroup;
    titulo: string = 'Nueva Categoría';
    subtitulo: string = '';
    categoria: IPaginaCategoria = {
        idPaginaCategoria: -1,
        nombre: '',
        orden: 0,
        activo: true
    };
    paramId: number = -1;

    constructor(
        private activedRoute: ActivatedRoute,
        private router: Router,
        private _paginaService: PaginaService
    ) {
        // obtiene los parametros
        this.activedRoute.params
            .subscribe( parametros => {
                this.paramId = Number.parseInt(parametros['id'], 10);
            });
    }

    ngOnInit() {
        // inicia los campos que se van a manejar desde el formulario html
        this.formulario = new FormGroup({
            idPaginaCategoria: new FormControl(),
            nombre: new FormControl('', Validators.required),
            orden: new FormControl('0', Validators.required),
            activo: new FormControl(true, Validators.required)
        });

        // obtiene detalle
        if ( this.paramId !== -1 ) {
            this._paginaService.obtenerDetalleCategoria(this.paramId)
                .subscribe( (resp: any ) => {
                    // actualiza controles del formulario
                    this.categoria = resp.data.categoria;
                    this.formulario.setValue(this.categoria);

                    // cambia el titulo
                    this.titulo = this.categoria.nombre;
                    this.subtitulo = `(ID: ${this.categoria.idPaginaCategoria})`;
                });
        }
    }

    guardarCategoria() {
        // si el formalurio es invalido, detiene el proceso
        if ( this.formulario.invalid ) {
            swal('Error', 'Revise los datos del formulario', 'error');
            return;
        }

        // setea valores para enviarlos
        this.categoria.idPaginaCategoria = Number.parseInt(this.categoria.idPaginaCategoria.toString(), 10);
        this.categoria.nombre = this.formulario.value.nombre;
        this.categoria.orden = this.formulario.value.orden;
        this.categoria.activo = this.formulario.value.activo;

        if ( this.categoria.idPaginaCategoria === -1) {
            this._paginaService.crearCategoria(this.categoria)
                .subscribe( resp => {
                    this.router.navigate(['/pagina/adm-pagina-categoria-listado']);
                });
        } else {
            this._paginaService.actualizarCategoria(this.categoria)
                .subscribe( resp => {
                    this.router.navigate(['/pagina/adm-pagina-categoria-listado']);
                });
        }
    }

    eliminarCategoria(categoria: IPaginaCategoria) {
        swal({
            title: 'Eliminar Categoría',
            text: '¿Seguro que desea eliminar el registro?',
            icon: 'warning',
            buttons: ['Cancelar', 'Eliminar'],
            dangerMode: true
        })
        .then((confirmacion) => {
            if (confirmacion) {
                this._paginaService.eliminarCategoria(categoria)
                    .subscribe( resp => {
                        this.router.navigate(['/pagina/adm-pagina-categoria-listado']);
                    });
            }
        });
    }

}
