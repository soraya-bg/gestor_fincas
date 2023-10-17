import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { LoginComponent } from './login/login.component';
import { CreartrabajadorComponent } from './administrador/creartrabajador/creartrabajador.component';
import { FincasComponent } from './administrador/fincas/fincas.component';
import { AdminFincasComponent } from './administrador/admin-fincas/admin-fincas.component';
import { AdminGanadoComponent } from './administrador/admin-ganado/admin-ganado.component';
import { UserFincasComponent } from './trabajador/user-fincas/user-fincas.component';
import { UserGanadoComponent } from './trabajador/user-ganado/user-ganado.component';
import { AdminCreateuserComponent } from './administrador/admin-createuser/admin-createuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    TrabajadorComponent,
    LoginComponent,
    CreartrabajadorComponent,
    FincasComponent,
    AdminFincasComponent,
    AdminGanadoComponent,
    UserFincasComponent,
    UserGanadoComponent,
    AdminCreateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
