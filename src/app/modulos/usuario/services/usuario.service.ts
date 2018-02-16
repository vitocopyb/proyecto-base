import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { IConfiguracion } from '../interfaces/usuario.interface';

@Injectable()
export class UsuarioService {
    KEY_STORAGE_CONFIGURACION: string = 'configuracion';

    configuracion: IConfiguracion = {
        tema: 'green-dark',
        temaUrl: 'assets/css/colors/'
    }

    constructor( @Inject(DOCUMENT) private _document ) {
        this.cargarTema();
    }

    cargarTema() {
        if ( localStorage.getItem(this.KEY_STORAGE_CONFIGURACION) ) {
            this.configuracion = JSON.parse( localStorage.getItem(this.KEY_STORAGE_CONFIGURACION) );
        }

        this.aplicarTema( this.configuracion.tema );
    }

    aplicarTema( tema: string ) {
        const url = `${ this.configuracion.temaUrl }${ tema }.css`;
        this._document.getElementById('cssTema').setAttribute('href', url);

        // guarda los datos en el servicio
        this.configuracion.tema = tema;
        this.guardarTema();
    }

    guardarTema() {
        localStorage.setItem(this.KEY_STORAGE_CONFIGURACION, JSON.stringify( this.configuracion ));
    }

}
