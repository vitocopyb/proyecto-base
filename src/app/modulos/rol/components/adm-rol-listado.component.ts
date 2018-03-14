import { Component, OnInit, OnDestroy } from '@angular/core';

import { ScriptLoaderService } from '../../../comun/services/script-loader.service';
import { IRol } from '../interfaces/rol.interface';
import { RolService } from '../services/rol.service';
import * as swal from 'sweetalert';

@Component({
    selector: 'app-adm-rol-listado',
    templateUrl: './adm-rol-listado.component.html',
    styles: []
})
export class AdmRolListadoComponent implements OnInit, OnDestroy {

    listadoRoles: IRol[] = [];
    totalRegistros: number = 0;

    constructor( private _scriptLoader: ScriptLoaderService, private _rolService: RolService ) { }

    ngOnInit() {
        this._scriptLoader
            .load('uno', 'dos').then(data => {
                console.log('script loaded ', data);
            })
            .catch(error => console.log(error));

        // obtiene listado
        this.obtenerRoles();
    }

    ngOnDestroy() {
        // this._scriptLoader.removeScript();
    }

    obtenerRoles() {
        this._rolService.obtenerRoles()
            .subscribe( (resp: any) => {
                console.log(resp);
                this.listadoRoles = resp.roles;
                this.totalRegistros = resp.total;
            });
    }

    eliminarRol( idRol: number ) {
        swal({
            title: 'Eliminar Rol',
            text: '¿Seguro que desea eliminar el registro?',
            icon: 'warning',
            buttons: ['Cancelar', 'Eliminar'],
            dangerMode: true
        })
        .then((confirmacion) => {
            if (confirmacion) {
                this._rolService.eliminarRol(idRol)
                    .subscribe( resp => {
                        console.log('eliminado', resp);
                        this.obtenerRoles();
                    });
            }
        });
    }

}
