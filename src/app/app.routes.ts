import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modulos/login/components/login.component';
import { PageNotFoundComponent } from './modulos/sistema/components/page-not-found.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
