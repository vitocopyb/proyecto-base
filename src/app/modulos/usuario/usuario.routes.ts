import { RouterModule, Routes } from '@angular/router';

import { AdmPagesComponent } from '../../comun/components/adm-pages.component';
import { AdmUsuarioConfiguracionComponent } from './components/adm-usuario-configuracion.component';

const usuarioRoutes: Routes = [
    {
        path: 'usuario',
        component: AdmPagesComponent,
        children: [
            { path: 'adm-usuario-configuracion', component: AdmUsuarioConfiguracionComponent, data: { titulo: 'Configuración' } }
        ]
    }
];

// se utiliza forChild para rutas que estan dentro de un router principal
export const USUARIO_ROUTES = RouterModule.forChild( usuarioRoutes );
