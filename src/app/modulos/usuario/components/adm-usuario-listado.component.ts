import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../interfaces/usuario.interface';
import { UsuarioService } from '../services/usuario.service';

@Component({
    selector: 'app-adm-usuario-listado',
    templateUrl: './adm-usuario-listado.component.html',
    styles: []
})
export class AdmUsuarioListadoComponent implements OnInit {

    listadoUsuarios: IUsuario[] = [];

    constructor( private _usuarioService: UsuarioService) { }

    ngOnInit() {
        // obtiene listado
        this.listadoUsuarios = this._usuarioService.obtenerUsuarios();
    }

}
