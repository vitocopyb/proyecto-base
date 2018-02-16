import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// temporal
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { ComunModule } from './comun/comun.module';
import { RolModule } from './modulos/rol/rol.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './modulos/login/login.component';

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
    UsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
