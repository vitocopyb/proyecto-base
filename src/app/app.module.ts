import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './modulos/login/login.component';
import { AdminDashboardComponent } from './common/components/admin-dashboard.component';
import { AdminSidebarComponent } from './common/components/admin-sidebar.component';
import { AdminHeaderComponent } from './common/components/admin-header.component';
import { AdminBreadcrumbsComponent } from './common/components/admin-breadcrumbs.component';
import { AdminFooterComponent } from './common/components/admin-footer.component';
import { AdminRolListadoComponent } from './modulos/rol/components/admin-rol-listado.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminBreadcrumbsComponent,
    AdminFooterComponent,
    AdminRolListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
