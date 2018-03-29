import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent implements OnInit, OnDestroy {

    cssLogin: any = document.getElementById('cssLogin');

    constructor( public router: Router ) { }

    ngOnInit() {
        init_plugins();

        // agrega hoja de estilo
        // document.getElementById('cssLogin').setAttribute('href', 'assets/css/pages/login-register-lock.css');
        this.cssLogin.setAttribute('href', 'assets/css/pages/login-register-lock.css');
    }

    ngOnDestroy() {
        // elimina la hoja de estilo
        this.cssLogin.setAttribute('href', '');
    }

    ingresar() {
        this.router.navigate(['/adm-dashboard']);
    }
    
}
