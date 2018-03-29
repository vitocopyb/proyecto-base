import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as swal from 'sweetalert';

// todo **
import { ScriptLoaderService } from '../../../comun/services/script-loader.service';
import { IRol } from '../interfaces/rol.interface';
import { RolService } from '../services/rol.service';

@Component({
    selector: 'app-adm-rol-detalle',
    templateUrl: './adm-rol-detalle.component.html',
    styles: []
})
export class AdmRolDetalleComponent implements OnInit {

    formulario: FormGroup;
    titulo: string = 'Nuevo Rol';
    subtitulo: string = '';
    rol: IRol = {
        idRol: -1,
        nombre: '',
        llave: ''
    };
    paramId: number = -1;

    constructor(
        private _scriptLoader: ScriptLoaderService,
        private _rolService: RolService,
        private activedRoute: ActivatedRoute,
        private router: Router
    ) {
        // obtiene los parametros
        this.activedRoute.params
            .subscribe( parametros => {
                this.paramId = Number.parseInt(parametros['id'], 10);
            });
    }

    ngOnInit() {
        this._scriptLoader
            .load('uno', 'tres').then(data => {
                console.log('script loaded ', data);
            })
            .catch(error => console.log(error));

        // inicia los campos que se van a manejar desde el formulario html
        this.formulario = new FormGroup({
            idRol: new FormControl(),
            nombre: new FormControl('', Validators.required),
            llave: new FormControl('', Validators.required)
        });

        // obtiene detalle
        if ( this.paramId !== -1 ) {
            this._rolService.obtenerDetalleRol(this.paramId)
                .subscribe( (resp: any ) => {
                    // actualiza controles del formulario
                    this.rol = resp.data.rol;
                    this.formulario.setValue(this.rol);

                    // cambia el titulo
                    this.titulo = this.rol.nombre;
                    this.subtitulo = `(ID: ${this.rol.idRol})`;
                });
        }
    }

    guardarRol() {
        // si el formalurio es invalido, detiene el proceso
        if ( this.formulario.invalid ) {
            swal('Error', 'Revise los datos del formulario', 'error');
            return;
        }

        // setea valores para enviarlos
        this.rol.idRol = Number.parseInt(this.rol.idRol.toString(), 10);
        this.rol.nombre = this.formulario.value.nombre;
        this.rol.llave = this.formulario.value.llave;

        if ( this.rol.idRol === -1) {
            this._rolService.crearRol( this.rol )
                .subscribe( resp => {
                    this.router.navigate(['/rol/adm-rol-listado']);
                });
        } else {
            this._rolService.actualizarRol( this.rol )
                .subscribe( resp => {
                    this.router.navigate(['/rol/adm-rol-listado']);
                });
        }
    }

    eliminarRol(rol: IRol ) {
        swal({
            title: 'Eliminar Rol',
            text: '¿Seguro que desea eliminar el registro?',
            icon: 'warning',
            buttons: ['Cancelar', 'Eliminar'],
            dangerMode: true
        })
        .then((confirmacion) => {
            if (confirmacion) {
                this._rolService.eliminarRol(rol)
                    .subscribe( resp => {
                        this.router.navigate(['/rol/adm-rol-listado']);
                    });
            }
        });
    }

}
