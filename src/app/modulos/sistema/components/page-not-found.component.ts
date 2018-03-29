import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styles: []
})
export class PageNotFoundComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        init_plugins();
    }
}
