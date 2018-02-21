import { RouterModule, Routes } from '@angular/router';

import { AdmPagesComponent } from './components/adm-pages.component';
import { AdmDashboardComponent } from './components/adm-dashboard.component';

const comunRoutes: Routes = [
    {
        path: '',
        component: AdmPagesComponent,
        children: [
            { path: 'adm-dashboard', component: AdmDashboardComponent, data: { titulo: 'Dashboard' } },
            { path: '', redirectTo: '/adm-dashboard', pathMatch: 'full'}
        ]
    }
    
];

export const COMUN_ROUTES = RouterModule.forChild( comunRoutes );
