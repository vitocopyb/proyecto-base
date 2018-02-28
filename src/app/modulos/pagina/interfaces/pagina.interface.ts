export interface IPagina {
    idPagina: number;
    idPaginaCategoria: number;
    nombre: string;
    url: string;
    mostrarEnMenu: boolean;
    orden: number;
    activo: boolean;
    idPaginaPadre: number;
}

export interface IPaginaCategoria {
    idPaginaCategoria: number;
    nombre: string;
    orden: number;
    activo: boolean;
}