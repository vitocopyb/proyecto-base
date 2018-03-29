import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IPaginaCategoria } from '../interfaces/pagina.interface';
import { PaginaService } from '../services/pagina.service';

@Component({
    selector: 'app-adm-pagina-categoria-detalle',
    templateUrl: './adm-pagina-categoria-detalle.component.html',
    styles: []
})
export class AdmPaginaCategoriaDetalleComponent implements OnInit {

    formulario: FormGroup;
    titulo: string = 'Nueva Categoría';
    subtitulo: string = '';
    categoria: IPaginaCategoria = {
        idPaginaCategoria: -1,
        nombre: '',
        orden: 1,
        activo: true
    };

    constructor(private _paginaService: PaginaService) { }

    ngOnInit() {
        // obtiene detalle
        this.categoria = this._paginaService.obtenerDetalleCategoria(1);

        // cambia el titulo
        if (this.categoria.idPaginaCategoria !== -1) {
            this.titulo = this.categoria.nombre;
            this.subtitulo = `(ID: ${this.categoria.idPaginaCategoria})`;
        }
    }

    eliminarCategoria(categoria: IPaginaCategoria) {

    }

}
