import { Component, OnInit, OnDestroy } from '@angular/core';

import { ScriptLoaderService } from '../../../comun/services/script-loader.service';
import { IRol } from '../interfaces/rol.interface';
import { RolService } from '../services/rol.service';

@Component({
    selector: 'app-adm-rol-listado',
    templateUrl: './adm-rol-listado.component.html',
    styles: []
})
export class AdmRolListadoComponent implements OnInit, OnDestroy {

    listadoRoles: IRol[] = [];
    
    constructor( private _scriptLoader: ScriptLoaderService, private _rolService: RolService ) { }

    ngOnInit() {
        this._scriptLoader
            .load('uno', 'dos').then(data => {
                console.log('script loaded ', data);
            })
            .catch(error => console.log(error));

        // obtiene listado
        this.listadoRoles = this._rolService.obtenerRoles();
    }

    ngOnDestroy() {
        // this._scriptLoader.removeScript();
    }


}
