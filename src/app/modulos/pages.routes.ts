import { RouterModule, Routes } from '@angular/router';

// Guardianes
import { AuthGuard } from '../comun/guards/auth.guard';

// Componentes
import { AdmPagesComponent } from './adm-pages.component';
import { AdmDashboardComponent } from './sistema/components/adm-dashboard.component';
import { AdmRolListadoComponent } from './rol/components/adm-rol-listado.component';
import { AdmRolDetalleComponent } from './rol/components/adm-rol-detalle.component';
import { AdmPaginaListadoComponent } from './pagina/components/adm-pagina-listado.component';
import { AdmPaginaDetalleComponent } from './pagina/components/adm-pagina-detalle.component';
import { AdmPaginaCategoriaListadoComponent } from './pagina/components/adm-pagina-categoria-listado.component';
import { AdmPaginaCategoriaDetalleComponent } from './pagina/components/adm-pagina-categoria-detalle.component';
import { AdmUsuarioConfiguracionComponent } from './usuario/components/adm-usuario-configuracion.component';
import { AdmUsuarioListadoComponent } from './usuario/components/adm-usuario-listado.component';
import { AdmUsuarioDetalleComponent } from './usuario/components/adm-usuario-detalle.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: AdmPagesComponent,
        canActivate: [ AuthGuard ],
        children: [
            // Sistema
            { path: '', redirectTo: '/adm-dashboard', pathMatch: 'full'},
            { path: 'adm-dashboard', component: AdmDashboardComponent, data: { titulo: 'Dashboard' } },

            // Roles
            { path: 'rol/adm-rol-listado', component: AdmRolListadoComponent, data: { titulo: 'Roles' } },
            { path: 'rol/adm-rol-detalle/:id', component: AdmRolDetalleComponent, data: { titulo: 'Rol Detalle' } },

            // Pagina
            { path: 'pagina/adm-pagina-listado', component: AdmPaginaListadoComponent, data: { titulo: 'Páginas' } },
            { path: 'pagina/adm-pagina-detalle', component: AdmPaginaDetalleComponent, data: { titulo: 'Página Detalle' } },
            { path: 'pagina/adm-pagina-categoria-listado', component: AdmPaginaCategoriaListadoComponent, data: { titulo: 'Categorías' } },
            { path: 'pagina/adm-pagina-categoria-detalle', component: AdmPaginaCategoriaDetalleComponent, data: { titulo: 'Categoría Detalle' } },

            // Usuario
            { path: 'usuario/adm-usuario-configuracion', component: AdmUsuarioConfiguracionComponent, data: { titulo: 'Configuración' } },
            { path: 'usuario/adm-usuario-listado', component: AdmUsuarioListadoComponent, data: { titulo: 'Usuarios' } },
            { path: 'usuario/adm-usuario-detalle', component: AdmUsuarioDetalleComponent, data: { titulo: 'Usuario Detalle' } }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
