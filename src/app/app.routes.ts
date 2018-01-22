import { RouterModule, Routes } from '@angular/router';
import { AdmDashboardComponent } from './common/components/adm-dashboard.component';
import { PageNotFoundComponent } from './common/components/page-not-found.component';
import { AdmRolListadoComponent } from './modulos/rol/components/adm-rol-listado.component';
import { AdmRolDetalleComponent } from './modulos/rol/components/adm-rol-detalle.component';

const appRoutes: Routes = [
    { path: 'adm-dashboard', component: AdmDashboardComponent },
    { path: 'adm-rol-listado', component: AdmRolListadoComponent },
    { path: 'adm-rol-detalle', component: AdmRolDetalleComponent },
    { path: '', redirectTo: '/adm-dashboard', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
