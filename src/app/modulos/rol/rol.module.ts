import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas
import { ROL_ROUTES } from './rol.routes';

// Componentes
import { AdmRolListadoComponent } from './components/adm-rol-listado.component';
import { AdmRolDetalleComponent } from './components/adm-rol-detalle.component';

@NgModule({
  declarations: [
    AdmRolListadoComponent,
    AdmRolDetalleComponent
  ],
  imports: [
    CommonModule,
    ROL_ROUTES
  ],
  // export se utiliza para exponer los modulos que se pueden utilizar desde otro lado que no sea dentro de RolModule
  exports: []
})
export class RolModule { }
