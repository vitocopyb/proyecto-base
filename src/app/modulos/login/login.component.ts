import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() {
        // agrega hoja de estilo
        document.getElementById('cssLogin').setAttribute('href', 'assets/global/css/login-v2.min.css');

        // agrega clases en el tag body
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('page-login-v2', 'layout-full', 'page-dark');
    }

    ngOnDestroy() {
        // elimina la hoja de estilo
        document.getElementById('cssLogin').setAttribute('href', '');

        // quita las clases del body
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('page-login-v2', 'layout-full', 'page-dark');
    }

}
