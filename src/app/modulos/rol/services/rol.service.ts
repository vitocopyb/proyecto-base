import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRol } from '../interfaces/rol.interface';
import { CONSTANTES } from '../../../comun/utilities/constantes';

@Injectable()
export class RolService {

    private urlServicio: string = CONSTANTES.URL_BACKEND + '/roles';
    private listadoRoles: IRol[] = [];

    constructor( private http: HttpClient ) { }

    obtenerRoles() {
        return this.http.get( this.urlServicio )
                    .map( (resp: any) => {
                        this.listadoRoles = resp.roles;
                        return resp;
                    });
    }

    obtenerDetalleRol(idRol: number) {
        const url = `${this.urlServicio}/${ idRol }`;
        return this.http.get( url );
    }

    crearRol( rol: IRol ) {
        return this.http.post( this.urlServicio, rol )
                    .map( (resp: any) => {
                        swal('Rol creado', resp.mensaje, 'success');
                        return resp;
                    });
    }

    actualizarRol( rol: IRol ) {
        const url = `${this.urlServicio}/${ rol.idRol }`;
        return this.http.put( url, rol )
                    .map( (resp: any) => {
                        // swal('Rol actualizado', resp.mensaje, 'success');
                        swal('Rol actualizado', rol.nombre, 'success');
                        return resp;
                    });
    }

    eliminarRol(idRol: number) {
        const url = `${this.urlServicio}/${ idRol }`;
        return this.http.delete( url )
                    .map( (resp: any) => {
                        swal('Rol eliminado', resp.message, 'success');
                        return resp;
                    });
    }

}
