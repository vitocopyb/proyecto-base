import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas
import { COMUN_ROUTES } from './comun.routes';

// Servicios
import { ScriptLoaderService } from './services/script-loader.service';

// Componentes
import { AdmPagesComponent } from './components/adm-pages.component';
import { AdmDashboardComponent } from './components/adm-dashboard.component';
import { AdmSidebarComponent } from './components/adm-sidebar.component';
import { AdmHeaderComponent } from './components/adm-header.component';
import { AdmBreadcrumbsComponent } from './components/adm-breadcrumbs.component';
import { AdmFooterComponent } from './components/adm-footer.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

@NgModule({
    declarations: [
        AdmPagesComponent,
        AdmDashboardComponent,
        AdmSidebarComponent,
        AdmHeaderComponent,
        AdmBreadcrumbsComponent,
        AdmFooterComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        COMUN_ROUTES
    ],
    // export se utiliza para exponer los modulos que se pueden utilizar desde otro lado que no sea dentro de RolModule
    exports: [
        AdmDashboardComponent,
        AdmSidebarComponent,
        AdmHeaderComponent,
        AdmBreadcrumbsComponent,
        AdmFooterComponent,
        PageNotFoundComponent
    ],
    providers: [
        ScriptLoaderService
    ]
})
export class ComunModule { }
