import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
    selector: 'app-adm-usuario-configuracion',
    templateUrl: './adm-usuario-configuracion.component.html',
    styles: []
})
export class AdmUsuarioConfiguracionComponent implements OnInit {
    
    constructor( public _usuarioService: UsuarioService ) { }

    ngOnInit() {
        this.colocarCheck();
    }

    cambiarTema( tema: string, link: any) {
        // marca con un "check" el tema utilizado
        this.aplicarCheck( link );

        // cambia el tema seleccionado
        this._usuarioService.aplicarTema( tema );
    }

    aplicarCheck( link: any ) {
        // obtiene todos los controles que tengan la clase "selector"
        const selectores: any = document.getElementsByClassName('selector');

        // recorre todos los controles para remover la clase "working"
        for (const ref of selectores) {
            ref.classList.remove('working');
        }

        // agrega la clase "working"
        link.classList.add('working');
    }

    colocarCheck() {
        const selectores: any = document.getElementsByClassName('selector');
        const tema = this._usuarioService.configuracion.tema;

        for (const ref of selectores) {
            if ( ref.getAttribute('data-theme') === tema ) {
                ref.classList.add('working');
                break;
            }
        }
    }

}
