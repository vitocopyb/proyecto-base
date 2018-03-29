import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Componentes
import { AdmDashboardComponent } from './components/adm-dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        AdmDashboardComponent,
        PageNotFoundComponent
    ],
    exports: [],
    providers: []
})
export class SistemaModule {}
