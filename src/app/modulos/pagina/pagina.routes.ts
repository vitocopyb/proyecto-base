import { RouterModule, Routes } from '@angular/router';

import { AdmPagesComponent } from '../../comun/components/adm-pages.component';
import { AdmPaginaListadoComponent } from './components/adm-pagina-listado.component';
import { AdmPaginaDetalleComponent } from './components/adm-pagina-detalle.component';

const paginaRoutes: Routes = [
    {
        path: 'pagina',
        component: AdmPagesComponent,
        children: [
            { path: 'adm-pagina-listado', component: AdmPaginaListadoComponent, data: { titulo: 'Páginas' } },
            { path: 'adm-pagina-detalle', component: AdmPaginaDetalleComponent, data: { titulo: 'Página Detalle' } }
        ]
    }
];

// se utiliza forChild para rutas que estan dentro de un router principal
export const PAGINA_ROUTES = RouterModule.forChild( paginaRoutes );
