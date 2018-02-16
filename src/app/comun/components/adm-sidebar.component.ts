import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
    selector: 'app-adm-sidebar',
    templateUrl: './adm-sidebar.component.html',
    styles: []
})
export class AdmSidebarComponent implements OnInit {

    constructor( public _sidebar: SidebarService) { }

    ngOnInit() {
    }

}
