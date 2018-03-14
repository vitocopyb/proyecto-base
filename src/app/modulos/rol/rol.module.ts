import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { ROL_ROUTES } from './rol.routes';

// Servicios
import { RolService } from './services/rol.service';

// Componentes
import { AdmRolListadoComponent } from './components/adm-rol-listado.component';
import { AdmRolDetalleComponent } from './components/adm-rol-detalle.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        ROL_ROUTES
    ],
    declarations: [
        AdmRolListadoComponent,
        AdmRolDetalleComponent
    ],
    // export se utiliza para exponer los modulos que se pueden utilizar desde otro lado que no sea dentro de RolModule
    exports: [],
    providers: [
        RolService
    ]
})
export class RolModule { }
