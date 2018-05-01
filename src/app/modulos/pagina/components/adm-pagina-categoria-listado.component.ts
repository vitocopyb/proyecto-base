import { Component, OnInit } from '@angular/core';
import { IPaginaCategoria } from '../interfaces/pagina.interface';
import { PaginaService } from '../services/pagina.service';

@Component({
    selector: 'app-adm-pagina-categoria-listado',
    templateUrl: './adm-pagina-categoria-listado.component.html',
    styles: []
})
export class AdmPaginaCategoriaListadoComponent implements OnInit {

    listadoCategorias: IPaginaCategoria[] = [];
    totalRegistros: number = 0;

    constructor( private _paginaService: PaginaService ) { }

    ngOnInit() {
        // obtiene listado
        this.obtenerCategorias();
    }

    obtenerCategorias() {
        this._paginaService.obtenerCategorias()
            .subscribe( (resp: any) => {
                this.listadoCategorias = resp.data.categorias;
                this.totalRegistros = resp.data.total;
            });
    }

    eliminarCategoria(paginaCategoria: IPaginaCategoria) {
        swal({
            title: 'Eliminar Categoría',
            text: '¿Seguro que desea eliminar el registro?',
            icon: 'warning',
            buttons: ['Cancelar', 'Eliminar'],
            dangerMode: true
        })
        .then((confirmacion) => {
            if (confirmacion) {
                this._paginaService.eliminarCategoria(paginaCategoria)
                    .subscribe( resp => {
                        console.log('eliminado', resp);
                        this.obtenerCategorias();
                    });
            }
        });
    }

}
