import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
    selector: 'app-adm-pages',
    templateUrl: './adm-pages.component.html',
    styles: []
})
export class AdmPagesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        init_plugins();
    }

}
