import { NgModule } from '@angular/core';
import { TextoActivoPipe } from './texto-activo/texto-activo.pipe';

@NgModule({
    imports: [],
    declarations: [
        TextoActivoPipe
    ],
    exports: [
        TextoActivoPipe
    ]
})
export class PipesModule {}
