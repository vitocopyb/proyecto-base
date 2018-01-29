import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modulos/login/login.component';
import { PageNotFoundComponent } from './comun/components/page-not-found.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
