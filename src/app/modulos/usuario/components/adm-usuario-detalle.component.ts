import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../interfaces/usuario.interface';
import { UsuarioService } from '../services/usuario.service';

@Component({
    selector: 'app-adm-usuario-detalle',
    templateUrl: './adm-usuario-detalle.component.html',
    styles: []
})
export class AdmUsuarioDetalleComponent implements OnInit {

    titulo: string = 'Nueva Página';
    idRegistro: string = '';
    usuario: IUsuario = {
        idUsuario: -1,
        idRol: -1,
        nombre: '',
        paterno: '',
        materno: '',
        username: '',
        password: '',
        tipoIdentificacion: '',
        identificacion: '',
        telefono: '',
        email: '',
        activo: true
    };

    constructor( private _usuarioService: UsuarioService ) { }

    ngOnInit() {
        // obtiene detalle
        this.usuario = this._usuarioService.obtenerDetalleUsuario(1);

        // cambia el titulo
        if (this.usuario.idUsuario !== -1) {
            this.titulo = this.usuario.nombre;
            this.idRegistro = `(id: ${this.usuario.idUsuario})`;
        }
    }

}
