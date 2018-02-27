export interface IConfiguracion {
    temaUrl: string;
    tema: string;
};

export interface IUsuario {
    idUsuario: number;
    idRol: number;
    nombre: string;
    paterno: string;
    materno: string;
    username: string;
    password: string;
    tipoIdentificacion: string;
    identificacion: string;
    telefono: string;
    email: string;
    activo: boolean;
};