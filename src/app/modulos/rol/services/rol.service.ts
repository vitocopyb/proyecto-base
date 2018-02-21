import { Injectable } from '@angular/core';
import { Rol } from '../interfaces/rol.interface';

@Injectable()
export class RolService {

    private listadoRoles: Rol[] = [
        { idRol: 1, nombre: 'Administrador de Sistemas', llave: 'ADM'},
        { idRol: 2, nombre: 'Genérico', llave: 'GEN'},
        { idRol: 3, nombre: 'Cliente', llave: 'CLI'},
    ];

    constructor() { }

    obtenerRoles(): Rol[] {
        return this.listadoRoles;
    }

    obtenerDetalleRol(idRol: number): Rol {
        return this.listadoRoles[0];
    }
    
}
