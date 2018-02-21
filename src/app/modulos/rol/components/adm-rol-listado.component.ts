import { Component, OnInit, OnDestroy } from '@angular/core'; // todo *** Inject

// todo ***
import { ScriptLoaderService } from '../../../comun/services/script-loader.service';
import { RolService } from '../services/rol.service';
import { Rol } from '../interfaces/rol.interface';

@Component({
    selector: 'app-adm-rol-listado',
    templateUrl: './adm-rol-listado.component.html',
    styles: []
})
export class AdmRolListadoComponent implements OnInit, OnDestroy {

    listadoRoles: Rol[] = [];
    
    constructor( private _scriptLoader: ScriptLoaderService, private _rolService: RolService ) { }

    ngOnInit() {
        this._scriptLoader
            .load('uno', 'dos').then(data => {
                console.log('script loaded ', data);
            })
            .catch(error => console.log(error));

        // obtiene listado de roles
        this.listadoRoles = this._rolService.obtenerRoles();
    }

    ngOnDestroy() {
        // this._scriptLoader.removeScript();
    }


}
