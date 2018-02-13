import { Component, OnInit, OnDestroy } from '@angular/core'; // todo *** Inject

// todo ***
import { ScriptLoaderService } from '../../../comun/services/script-loader.service';

@Component({
    selector: 'app-adm-rol-listado',
    templateUrl: './adm-rol-listado.component.html',
    styles: []
})
export class AdmRolListadoComponent implements OnInit, OnDestroy {

    constructor( private _scriptLoader: ScriptLoaderService ) { }

    ngOnInit() {
        this._scriptLoader
            .load('uno', 'dos').then(data => {
                console.log('script loaded ', data);
            })
            .catch(error => console.log(error));
    }

    ngOnDestroy() {
        // this._scriptLoader.removeScript();
    }


}
