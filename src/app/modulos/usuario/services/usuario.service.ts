import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { IConfiguracion, IUsuario } from '../interfaces/usuario.interface';
import { Constantes } from '../../../comun/utilities/constantes';

@Injectable()
export class UsuarioService {

    configuracion: IConfiguracion = {
        tema: this._constantes.TEMA_COLOR_DEFAULT,
        temaUrl: this._constantes.TEMA_URL
    }

    private listadoUsuarios: IUsuario[] = [
        { idUsuario: 1, idRol: 1, nombre: 'Nombre Usuario 1', paterno: 'Paterno', materno: 'Materno', username: 'username', password: 'xyz', tipoIdentificacion: 'RUT', identificacion: '123-6', telefono: '987654321', email: 'test@vsr.cl', activo: true },
        { idUsuario: 2, idRol: 1, nombre: 'Nombre Usuario 2', paterno: 'Paterno', materno: 'Materno', username: 'username', password: 'xyz', tipoIdentificacion: 'RUT', identificacion: '123-6', telefono: '987654321', email: 'test@vsr.cl', activo: true },
        { idUsuario: 3, idRol: 1, nombre: 'Nombre Usuario 3', paterno: 'Paterno', materno: 'Materno', username: 'username', password: 'xyz', tipoIdentificacion: 'RUT', identificacion: '123-6', telefono: '987654321', email: 'test@vsr.cl', activo: true },
        { idUsuario: 4, idRol: 1, nombre: 'Nombre Usuario 4', paterno: 'Paterno', materno: 'Materno', username: 'username', password: 'xyz', tipoIdentificacion: 'RUT', identificacion: '123-6', telefono: '987654321', email: 'test@vsr.cl', activo: true },
        { idUsuario: 5, idRol: 1, nombre: 'Nombre Usuario 5', paterno: 'Paterno', materno: 'Materno', username: 'username', password: 'xyz', tipoIdentificacion: 'RUT', identificacion: '123-6', telefono: '987654321', email: 'test@vsr.cl', activo: true },
        { idUsuario: 6, idRol: 1, nombre: 'Nombre Usuario 6', paterno: 'Paterno', materno: 'Materno', username: 'username', password: 'xyz', tipoIdentificacion: 'RUT', identificacion: '123-6', telefono: '987654321', email: 'test@vsr.cl', activo: true },
        { idUsuario: 7, idRol: 1, nombre: 'Nombre Usuario 7', paterno: 'Paterno', materno: 'Materno', username: 'username', password: 'xyz', tipoIdentificacion: 'RUT', identificacion: '123-6', telefono: '987654321', email: 'test@vsr.cl', activo: true },
        { idUsuario: 8, idRol: 1, nombre: 'Nombre Usuario 8', paterno: 'Paterno', materno: 'Materno', username: 'username', password: 'xyz', tipoIdentificacion: 'RUT', identificacion: '123-6', telefono: '987654321', email: 'test@vsr.cl', activo: true },
        { idUsuario: 9, idRol: 1, nombre: 'Nombre Usuario 9', paterno: 'Paterno', materno: 'Materno', username: 'username', password: 'xyz', tipoIdentificacion: 'RUT', identificacion: '123-6', telefono: '987654321', email: 'test@vsr.cl', activo: true },
        { idUsuario: 10, idRol: 1, nombre: 'Nombre Usuario 10', paterno: 'Paterno', materno: 'Materno', username: 'username', password: 'xyz', tipoIdentificacion: 'RUT', identificacion: '123-6', telefono: '987654321', email: 'test@vsr.cl', activo: true }
    ];

    private listadoPermisos: any = [
        {
            nombreCategoria: 'Sistema',
            paginas: [
                {
                    nombrePagina: 'Rol listado',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Rol detalle',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Página Categoría listado',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Página Categoría detalle',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Página listado',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Página detalle',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                }
                
            ]
        },
        {
            nombreCategoria: 'Facturación',
            paginas: [
                {
                    nombrePagina: 'Rol listado',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Rol detalle',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Página Categoría listado',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Página Categoría detalle',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Página listado',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Página detalle',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                }
                
            ]
        },
        {
            nombreCategoria: 'Geografía',
            paginas: [
                {
                    nombrePagina: 'Rol listado',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Rol detalle',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Página Categoría listado',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Página Categoría detalle',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Página listado',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                },
                {
                    nombrePagina: 'Página detalle',
                    acciones: [
                        { nombre: 'Ver', seleccionado: true },
                        { nombre: 'Crear', seleccionado: true },
                        { nombre: 'Actualizar', seleccionado: false },
                        { nombre: 'Eliminar', seleccionado: false },
                    ]
                }
                
            ]
        }              
    ];    

    constructor( @Inject(DOCUMENT) private _document, private _constantes: Constantes ) {
        this.cargarTema();
    }

    cargarTema() {
        if ( localStorage.getItem(this._constantes.KEY_STORAGE_CONFIGURACION) ) {
            this.configuracion = JSON.parse( localStorage.getItem(this._constantes.KEY_STORAGE_CONFIGURACION) );
        }

        this.aplicarTema( this.configuracion.tema );
    }

    aplicarTema( tema: string ) {
        const paterno = `${ this.configuracion.temaUrl }${ tema }.css`;
        this._document.getElementById('cssTema').setAttribute('href', paterno);

        // guarda los datos en el servicio
        this.configuracion.tema = tema;
        this.guardarTema();
    }

    guardarTema() {
        localStorage.setItem(this._constantes.KEY_STORAGE_CONFIGURACION, JSON.stringify( this.configuracion ));
    }

    obtenerUsuarios(): IUsuario[] {
        return this.listadoUsuarios;
    }

    obtenerDetalleUsuario(idUsuario: number): IUsuario {
        return this.listadoUsuarios[0];
    }

    obtenerPermisos(): any[] {
        return this.listadoPermisos;
    }
    
}
