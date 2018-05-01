import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IRol } from '../interfaces/rol.interface';
import { CONSTANTES } from '../../../comun/utilities/constantes';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RolService {

    private urlServicio: string = CONSTANTES.URL_BACKEND + '/roles';
    private listadoRoles: IRol[] = [];

    constructor(private http: HttpClient) { }

    obtenerRoles() {
        return this.http.get( this.urlServicio )
                    .map( (resp: any) => {
                        this.listadoRoles = resp.data.roles;
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
                        swal(rol.nombre + ' creado', resp.message, 'success');
                        return resp;
                    })
                    .catch( err => {
                        // *** muestra un error general ***
                        // swal('Error', err.error.message , 'error');

                        // *** muestra el detalle de los errores ***
                        let listadoErrores: string = '';
                        const errores = err.error.errors;
                        Object.keys(errores).forEach((key) => {
                            // console.log(key, errores[key]);
                            for (const detalle of errores[key]) {
                                console.log(key, detalle);
                                // listadoErrores += key + ' - ' + detalle + '\n';
                                listadoErrores += `[${ key }] - ${ detalle }\n`;
                            }
                        });
                        swal('Error', listadoErrores , 'error');
                        // *** fin ***

                        return Observable.throw(err);
                    });
    }

    actualizarRol( rol: IRol ) {
        const url = `${this.urlServicio}/${ rol.idRol }`;
        return this.http.put( url, rol )
                    .map( (resp: any) => {
                        swal(rol.nombre + ' actualizado', resp.message, 'success');
                        return resp;
                    })
                    .catch( err => {
                        // *** muestra un error general ***
                        // swal('Error', err.error.message , 'error');

                        // *** muestra el detalle de los errores ***
                        let listadoErrores: string = '';
                        const errores = err.error.errors;
                        Object.keys(errores).forEach((key) => {
                            // console.log(key, errores[key]);
                            for (const detalle of errores[key]) {
                                console.log(key, detalle);
                                listadoErrores += `[${ key }] - ${ detalle }\n`;
                            }
                        });
                        swal('Error', listadoErrores , 'error');
                        // *** fin ***

                        return Observable.throw(err);
                    });
    }

    eliminarRol( rol: IRol ) {
        const url = `${this.urlServicio}/${ rol.idRol }`;
        return this.http.delete( url )
                    .map( (resp: any) => {
                        swal(rol.nombre + ' eliminado', resp.message, 'success');
                        return resp;
                    });
    }

}
