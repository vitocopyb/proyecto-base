import { Component, OnInit } from '@angular/core';
import { IPagina } from '../interfaces/pagina.interface';
import { PaginaService } from '../services/pagina.service';

@Component({
    selector: 'app-adm-pagina-listado',
    templateUrl: './adm-pagina-listado.component.html',
    styles: []
})
export class AdmPaginaListadoComponent implements OnInit {

    listadoPaginas: IPagina[] = [];

    constructor( private _paginaService: PaginaService ) { }

    ngOnInit() {
        // obtiene listado
        this.listadoPaginas = this._paginaService.obtenerPaginas();
    }

}
