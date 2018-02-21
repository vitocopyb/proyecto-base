import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Rutas
import { USUARIO_ROUTES } from './usuario.routes';

// Servicios
import { UsuarioService } from './services/usuario.service';

// Componentes
import { AdmUsuarioConfiguracionComponent } from './components/adm-usuario-configuracion.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        USUARIO_ROUTES
    ],
    declarations: [
        AdmUsuarioConfiguracionComponent
    ],
    providers: [
        UsuarioService
    ],
    exports: [
        RouterModule
    ]
    
})
export class UsuarioModule { }
