import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Rutas
import { PAGINA_ROUTES } from './pagina.routes';

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
        PAGINA_ROUTES
    ],
    declarations: [
        AdmPaginaListadoComponent,
        AdmPaginaDetalleComponent,
        AdmPaginaCategoriaListadoComponent,
        AdmPaginaCategoriaDetalleComponent
    ],
    // export se utiliza para exponer los modulos que se pueden utilizar desde otro lado que no sea dentro de RolModule
    exports: [],
    providers: [
        PaginaService
    ]
})

export class PaginaModule { }
