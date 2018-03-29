import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { ComunModule } from '../comun/comun.module';
import { RolModule } from './rol/rol.module';
import { PaginaModule } from './pagina/pagina.module';
import { UsuarioModule } from './usuario/usuario.module';
import { SistemaModule } from './sistema/sistema.module';

// Componentes
import { AdmPagesComponent } from './adm-pages.component';

@NgModule({
    declarations: [
        AdmPagesComponent
    ],
    imports: [
        CommonModule,
        PAGES_ROUTES,
        ComunModule,
        RolModule,
        PaginaModule,
        UsuarioModule,
        SistemaModule
    ],
    exports: [],
    providers: []
})
export class PagesModule { }
