import { Component, OnInit } from '@angular/core';

// todo **
import { ScriptLoaderService } from '../../../comun/services/script-loader.service';

@Component({
    selector: 'app-adm-rol-detalle',
    templateUrl: './adm-rol-detalle.component.html',
    styles: []
})
export class AdmRolDetalleComponent implements OnInit {

    constructor( private _scriptLoader: ScriptLoaderService ) { }

    ngOnInit() {
        this._scriptLoader
            .load('uno', 'tres').then(data => {
                console.log('script loaded ', data);
            })
            .catch(error => console.log(error));
    }

}
