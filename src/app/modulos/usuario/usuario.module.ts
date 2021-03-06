import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Servicios
import { UsuarioService } from './services/usuario.service';

// Componentes
import { AdmUsuarioConfiguracionComponent } from './components/adm-usuario-configuracion.component';
import { AdmUsuarioListadoComponent } from './components/adm-usuario-listado.component';
import { AdmUsuarioDetalleComponent } from './components/adm-usuario-detalle.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        AdmUsuarioConfiguracionComponent,
        AdmUsuarioListadoComponent,
        AdmUsuarioDetalleComponent
    ],
    exports: [],
    providers: [
        UsuarioService
    ],
})
export class UsuarioModule { }
