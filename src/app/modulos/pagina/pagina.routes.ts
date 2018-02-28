import { RouterModule, Routes } from '@angular/router';

import { AdmPagesComponent } from '../../comun/components/adm-pages.component';
import { AdmPaginaListadoComponent } from './components/adm-pagina-listado.component';
import { AdmPaginaDetalleComponent } from './components/adm-pagina-detalle.component';
import { AdmPaginaCategoriaListadoComponent } from './components/adm-pagina-categoria-listado.component';
import { AdmPaginaCategoriaDetalleComponent } from './components/adm-pagina-categoria-detalle.component';

const paginaRoutes: Routes = [
    {
        path: 'pagina',
        component: AdmPagesComponent,
        children: [
            { path: 'adm-pagina-listado', component: AdmPaginaListadoComponent, data: { titulo: 'Páginas' } },
            { path: 'adm-pagina-detalle', component: AdmPaginaDetalleComponent, data: { titulo: 'Página Detalle' } },
            { path: 'adm-pagina-categoria-listado', component: AdmPaginaCategoriaListadoComponent, data: { titulo: 'Categorías' } },
            { path: 'adm-pagina-categoria-detalle', component: AdmPaginaCategoriaDetalleComponent, data: { titulo: 'Categoría Detalle' } }
        ]
    }
];

// se utiliza forChild para rutas que estan dentro de un router principal
export const PAGINA_ROUTES = RouterModule.forChild( paginaRoutes );
