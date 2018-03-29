import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Guardianes
import { AuthGuard } from './guards/auth.guard';

// Servicios
import { ScriptLoaderService } from './services/script-loader.service';
import { SidebarService } from './services/sidebar.service';

// Componentes
import { AdmSidebarComponent } from './components/adm-sidebar.component';
import { AdmHeaderComponent } from './components/adm-header.component';
import { AdmBreadcrumbsComponent } from './components/adm-breadcrumbs.component';
import { AdmFooterComponent } from './components/adm-footer.component';

@NgModule({
    declarations: [
        AdmSidebarComponent,
        AdmHeaderComponent,
        AdmBreadcrumbsComponent,
        AdmFooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    // export se utiliza para exponer los modulos que se pueden utilizar desde otro lado que no sea dentro de RolModule
    exports: [
        AdmSidebarComponent,
        AdmHeaderComponent,
        AdmBreadcrumbsComponent,
        AdmFooterComponent
    ],
    providers: [
        ScriptLoaderService,
        SidebarService,
        AuthGuard
    ]
})
export class ComunModule { }
