import { Component, OnInit } from '@angular/core';
import { IPagina } from '../interfaces/pagina.interface';
import { PaginaService } from '../services/pagina.service';

@Component({
    selector: 'app-adm-pagina-detalle',
    templateUrl: './adm-pagina-detalle.component.html',
    styles: []
})
export class AdmPaginaDetalleComponent implements OnInit {

    titulo: string = 'Nueva Página';
    idRegistro: string = '';
    pagina: IPagina = {
        idPagina: -1,
        idPaginaCategoria: -1,
        nombre: '',
        url: '',
        mostrarEnMenu: true,
        orden: 1,
        activo: true,
        idPaginaPadre: -1
    };

    constructor( private _paginaService: PaginaService ) { }

    ngOnInit() {
        // obtiene detalle
        this.pagina = this._paginaService.obtenerDetallePagina(1);

        // cambia el titulo
        if (this.pagina.idPagina !== -1) {
            this.titulo = this.pagina.nombre;
            this.idRegistro = `(id: ${this.pagina.idPagina})`;
        }
    }

}
