import { RouterModule, Routes } from '@angular/router';

import { AdmPagesComponent } from '../../comun/components/adm-pages.component';
import { AdmUsuarioConfiguracionComponent } from './components/adm-usuario-configuracion.component';
import { AdmUsuarioListadoComponent } from './components/adm-usuario-listado.component';
import { AdmUsuarioDetalleComponent } from './components/adm-usuario-detalle.component';

const usuarioRoutes: Routes = [
    {
        path: 'usuario',
        component: AdmPagesComponent,
        children: [
            { path: 'adm-usuario-configuracion', component: AdmUsuarioConfiguracionComponent, data: { titulo: 'Configuración' } },
            { path: 'adm-usuario-listado', component: AdmUsuarioListadoComponent, data: { titulo: 'Usuarios' } },
            { path: 'adm-usuario-detalle', component: AdmUsuarioDetalleComponent, data: { titulo: 'Usuario Detalle' } }
        ]
    }
];

// se utiliza forChild para rutas que estan dentro de un router principal
export const USUARIO_ROUTES = RouterModule.forChild( usuarioRoutes );
