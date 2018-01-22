import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';


// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './modulos/login/login.component';
import { AdmDashboardComponent } from './common/components/adm-dashboard.component';
import { AdmSidebarComponent } from './common/components/adm-sidebar.component';
import { AdmHeaderComponent } from './common/components/adm-header.component';
import { AdmBreadcrumbsComponent } from './common/components/adm-breadcrumbs.component';
import { AdmFooterComponent } from './common/components/adm-footer.component';
import { AdmRolListadoComponent } from './modulos/rol/components/adm-rol-listado.component';
import { AdmRolDetalleComponent } from './modulos/rol/components/adm-rol-detalle.component';
import { PageNotFoundComponent } from './common/components/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmDashboardComponent,
    AdmSidebarComponent,
    AdmHeaderComponent,
    AdmBreadcrumbsComponent,
    AdmFooterComponent,
    AdmRolListadoComponent,
    AdmRolDetalleComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
