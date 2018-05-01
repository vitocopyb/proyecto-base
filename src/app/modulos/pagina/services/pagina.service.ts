import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPagina, IPaginaCategoria } from '../interfaces/pagina.interface';
import { CONSTANTES } from '../../../comun/utilities/constantes';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaginaService {

    private listadoPaginas: IPagina[] = [
        { idPagina: 1, idPaginaCategoria: 1, nombre: 'Nombre Pagina 1', url: '/path/nombre-componente', mostrarEnMenu: true, orden: 1, activo: true, idPaginaPadre: -1 },
        { idPagina: 2, idPaginaCategoria: 1, nombre: 'Nombre Pagina 2', url: '/path/nombre-componente', mostrarEnMenu: true, orden: 2, activo: true, idPaginaPadre: -1 },
        { idPagina: 3, idPaginaCategoria: 1, nombre: 'Nombre Pagina 3', url: '/path/nombre-componente', mostrarEnMenu: true, orden: 3, activo: true, idPaginaPadre: -1 },
        { idPagina: 4, idPaginaCategoria: 1, nombre: 'Nombre Pagina 4', url: '/path/nombre-componente', mostrarEnMenu: true, orden: 4, activo: true, idPaginaPadre: -1 },
        { idPagina: 5, idPaginaCategoria: 1, nombre: 'Nombre Pagina 5', url: '/path/nombre-componente', mostrarEnMenu: true, orden: 5, activo: true, idPaginaPadre: -1 },
        { idPagina: 6, idPaginaCategoria: 1, nombre: 'Nombre Pagina 6', url: '/path/nombre-componente', mostrarEnMenu: true, orden: 6, activo: true, idPaginaPadre: -1 },
        { idPagina: 7, idPaginaCategoria: 1, nombre: 'Nombre Pagina 7', url: '/path/nombre-componente', mostrarEnMenu: true, orden: 7, activo: true, idPaginaPadre: -1 },
        { idPagina: 8, idPaginaCategoria: 1, nombre: 'Nombre Pagina 8', url: '/path/nombre-componente', mostrarEnMenu: true, orden: 8, activo: true, idPaginaPadre: -1 },
        { idPagina: 9, idPaginaCategoria: 1, nombre: 'Nombre Pagina 9', url: '/path/nombre-componente', mostrarEnMenu: true, orden: 9, activo: true, idPaginaPadre: -1 },
        { idPagina: 10, idPaginaCategoria: 1, nombre: 'Nombre Pagina 10', url: '/path/nombre-componente', mostrarEnMenu: true, orden: 10, activo: true, idPaginaPadre: -1 }
    ];

    // private listadoCategorias: IPaginaCategoria[] = [
    //     { idPaginaCategoria: 1, nombre: 'Sistema', orden: 1, activo: true },
    //     { idPaginaCategoria: 2, nombre: 'Reportes', orden: 2, activo: true },
    //     { idPaginaCategoria: 3, nombre: 'Estadísticas', orden: 3, activo: true }
    // ];

    private urlServicioPaginaCategorias: string = CONSTANTES.URL_BACKEND + '/pagina-categorias';
    private listadoCategorias: IPaginaCategoria[] = [];

    constructor(private http: HttpClient) { }

    // ===================================================================
    // Pagina
    // ===================================================================
    obtenerPaginas(): IPagina[] {
        return this.listadoPaginas;
    }

    obtenerDetallePagina(idPagina: number): IPagina {
        return this.listadoPaginas[0];
    }

    // ===================================================================
    // PaginaCategoria
    // ===================================================================
    obtenerCategorias() {
        return this.http.get( this.urlServicioPaginaCategorias )
                    .map( (resp: any) => {
                        this.listadoCategorias = resp.data.categorias;
                        return resp;
                    });
    }

    obtenerDetalleCategoria(idPaginaCategoria: number) {
        const url = `${this.urlServicioPaginaCategorias}/${ idPaginaCategoria }`;
        return this.http.get( url );
    }

    crearCategoria(categoria: IPaginaCategoria ) {
        return this.http.post( this.urlServicioPaginaCategorias, categoria )
                    .map( (resp: any) => {
                        swal(categoria.nombre + ' creada', resp.message, 'success');
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

    actualizarCategoria(categoria: IPaginaCategoria ) {
        const url = `${this.urlServicioPaginaCategorias}/${ categoria.idPaginaCategoria }`;
        return this.http.put(url, categoria)
                    .map( (resp: any) => {
                        swal(categoria.nombre + ' actualizada', resp.message, 'success');
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

    eliminarCategoria(paginaCategoria: IPaginaCategoria) {
        const url = `${this.urlServicioPaginaCategorias}/${ paginaCategoria.idPaginaCategoria }`;
        return this.http.delete( url )
                    .map( (resp: any) => {
                        swal(paginaCategoria.nombre + ' eliminada', resp.message, 'success');
                        return resp;
                    });
    }

}
