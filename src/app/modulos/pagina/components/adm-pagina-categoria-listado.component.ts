import { Component, OnInit } from '@angular/core';
import { IPaginaCategoria } from '../interfaces/pagina.interface';
import { PaginaService } from '../services/pagina.service';

@Component({
    selector: 'app-adm-pagina-categoria-listado',
    templateUrl: './adm-pagina-categoria-listado.component.html',
    styles: []
})
export class AdmPaginaCategoriaListadoComponent implements OnInit {

    listadoCategorias: IPaginaCategoria[] = [];

    constructor( private _paginaService: PaginaService ) { }

    ngOnInit() {
        // obtiene listado
        this.listadoCategorias = this._paginaService.obtenerCategorias();
    }

}
