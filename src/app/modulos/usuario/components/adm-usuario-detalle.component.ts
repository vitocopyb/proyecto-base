import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../interfaces/usuario.interface';
import { UsuarioService } from '../services/usuario.service';
import { IPagina } from '../../pagina/interfaces/pagina.interface';

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
    
    permisos: any = [];

    constructor( private _usuarioService: UsuarioService ) { }

    ngOnInit() {
        // obtiene detalle
        this.usuario = this._usuarioService.obtenerDetalleUsuario(1);

        // obtiene permisos
        this.permisos = this._usuarioService.obtenerPermisos();

        // cambia el titulo
        if (this.usuario.idUsuario !== -1) {
            this.titulo = this.usuario.nombre;
            this.idRegistro = `(ID: ${this.usuario.idUsuario})`;
        }
    }

}
