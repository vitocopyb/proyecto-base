import { Injectable } from '@angular/core';
import { IPagina, IPaginaCategoria } from '../interfaces/pagina.interface';

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

    private listadoCategorias: IPaginaCategoria[] = [
        { idPaginaCategoria: 1, nombre: 'Sistema', orden: 1, activo: true },
        { idPaginaCategoria: 2, nombre: 'Reportes', orden: 2, activo: true },
        { idPaginaCategoria: 3, nombre: 'Estadísticas', orden: 3, activo: true }
    ];

    constructor() { }

    obtenerPaginas(): IPagina[] {
        return this.listadoPaginas;
    }

    obtenerDetallePagina(idPagina: number): IPagina {
        return this.listadoPaginas[0];
    }

    obtenerCategorias(): IPaginaCategoria[] {
        return this.listadoCategorias;
    }

    obtenerDetalleCategoria(idPaginaCategoria: number): IPaginaCategoria {
        return this.listadoCategorias[0];
    }

}
