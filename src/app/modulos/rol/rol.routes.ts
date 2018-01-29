import { RouterModule, Routes } from '@angular/router';

import { AdmPagesComponent } from '../../comun/components/adm-pages.component';
import { AdmRolListadoComponent } from './components/adm-rol-listado.component';
import { AdmRolDetalleComponent } from './components/adm-rol-detalle.component';

const rolRoutes: Routes = [
    {
        path: 'rol',
        component: AdmPagesComponent,
        children: [
            { path: 'adm-rol-listado', component: AdmRolListadoComponent },
            { path: 'adm-rol-detalle', component: AdmRolDetalleComponent }
        ]
    }
];

// se utiliza forChild para rutas que estan dentro de un router principal
export const ROL_ROUTES = RouterModule.forChild( rolRoutes );
