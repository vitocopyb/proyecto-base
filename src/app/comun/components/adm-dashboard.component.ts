import { Component, OnInit } from '@angular/core';
import * as swal from 'sweetalert';

@Component({
    selector: 'app-adm-dashboard',
    templateUrl: './adm-dashboard.component.html',
    styles: []
})

export class AdmDashboardComponent implements OnInit {

    constructor() {}

    ngOnInit() {}

    mostarMensajeSweetAlert() {
        // https://github.com/t4t5/sweetalert
        // https://sweetalert.js.org/guides/#getting-started
        swal('Bienvenido', 'Mensaje de ejemplo utilizando plugin sweet alert', 'success');
    }

}
