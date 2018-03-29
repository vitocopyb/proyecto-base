import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Servicios
import { PaginaService } from './services/pagina.service';

// Componentes
import { AdmPaginaListadoComponent } from './components/adm-pagina-listado.component';
import { AdmPaginaDetalleComponent } from './components/adm-pagina-detalle.component';
import { AdmPaginaCategoriaListadoComponent } from './components/adm-pagina-categoria-listado.component';
import { AdmPaginaCategoriaDetalleComponent } from './components/adm-pagina-categoria-detalle.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        AdmPaginaListadoComponent,
        AdmPaginaDetalleComponent,
        AdmPaginaCategoriaListadoComponent,
        AdmPaginaCategoriaDetalleComponent
    ],
    exports: [],
    providers: [
        PaginaService
    ]
})

export class PaginaModule { }
