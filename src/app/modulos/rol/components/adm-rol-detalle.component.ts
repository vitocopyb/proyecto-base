import { Component, OnInit } from '@angular/core';

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

    titulo: string = 'Nuevo Rol';
    idRegistro: string = '';
    rol: IRol = {
        idRol: -1,
        nombre: '',
        llave: ''
    };

    constructor( private _scriptLoader: ScriptLoaderService, private _rolService: RolService ) { }

    ngOnInit() {
        this._scriptLoader
            .load('uno', 'tres').then(data => {
                console.log('script loaded ', data);
            })
            .catch(error => console.log(error));

        // obtiene detalle
        this.rol = this._rolService.obtenerDetalleRol(1);

        // cambia el titulo
        if (this.rol.idRol !== -1) {
            this.titulo = this.rol.nombre;
            this.idRegistro = `(id: ${this.rol.idRol})`;
        }
    }

}
