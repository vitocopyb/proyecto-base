import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map'

// temporal
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { ComunModule } from './comun/comun.module';
import { RolModule } from './modulos/rol/rol.module';
import { PaginaModule } from './modulos/pagina/pagina.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './modulos/login/login.component';
import { Constantes } from './comun/utilities/constantes';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        APP_ROUTES,
        ComunModule,
        RolModule,
        PaginaModule,
        UsuarioModule
    ],
    providers: [
        Constantes
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
