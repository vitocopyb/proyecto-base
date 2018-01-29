import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { ComunModule } from './comun/comun.module';
import { RolModule } from './modulos/rol/rol.module';

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
    APP_ROUTES,
    ComunModule,
    RolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
