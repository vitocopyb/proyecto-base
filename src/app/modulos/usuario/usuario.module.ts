import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas
import { USUARIO_ROUTES } from './usuario.routes';

// Servicios
import { UsuarioService } from './services/usuario.service';

// Componentes
import { AdmUsuarioConfiguracionComponent } from './components/adm-usuario-configuracion.component';

@NgModule({
    imports: [
        CommonModule,
        USUARIO_ROUTES
    ],
    declarations: [
        AdmUsuarioConfiguracionComponent
    ],
    providers: [
        UsuarioService
    ]
})
export class UsuarioModule { }
