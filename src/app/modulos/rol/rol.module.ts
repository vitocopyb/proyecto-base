import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
        RouterModule
    ],
    declarations: [
        AdmRolListadoComponent,
        AdmRolDetalleComponent
    ],
    exports: [],
    providers: [
        RolService
    ]
})
export class RolModule { }
