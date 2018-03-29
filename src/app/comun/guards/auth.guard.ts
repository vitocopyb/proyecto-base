import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    // todo *** implementar esta variable con un servicio de autenticacion real
    usuarioAutenticado: boolean = true;

    constructor( private router: Router ) {
        console.log('Inicia AuthGuard');
    }

    canActivate() {
        if (this.usuarioAutenticado) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
