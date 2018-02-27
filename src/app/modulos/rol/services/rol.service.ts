import { Injectable } from '@angular/core';
import { IRol } from '../interfaces/rol.interface';

@Injectable()
export class RolService {

    private listadoRoles: IRol[] = [
        { idRol: 1, nombre: 'Administrador de Sistemas', llave: 'ADM'},
        { idRol: 2, nombre: 'Genérico', llave: 'GEN'},
        { idRol: 3, nombre: 'Cliente', llave: 'CLI'},
    ];

    constructor() { }

    obtenerRoles(): IRol[] {
        return this.listadoRoles;
    }

    obtenerDetalleRol(idRol: number): IRol {
        return this.listadoRoles[0];
    }
    
}
