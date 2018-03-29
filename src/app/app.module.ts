import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

// temporal
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './modulos/pages.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './modulos/login/components/login.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        APP_ROUTES,
        PagesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
