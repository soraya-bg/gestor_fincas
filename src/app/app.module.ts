import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ApiService } from './api.service';
import { RegisterComponent } from './register/register.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListfincasComponent } from './fincas/listfincas/listfincas.component';
import { AddfincasComponent } from './fincas/addfincas/addfincas.component';
import { EditfincasComponent } from './fincas/editfincas/editfincas.component';
import { ListganadoComponent } from './ganado/listganado/listganado.component';
import { AddganadoComponent } from './ganado/addganado/addganado.component';
import { EditganadoComponent } from './ganado/editganado/editganado.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PagenotfoundComponent,
    RegisterComponent,
    ListfincasComponent,
    AddfincasComponent,
    EditfincasComponent,
    ListganadoComponent,
    AddganadoComponent,
    EditganadoComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


