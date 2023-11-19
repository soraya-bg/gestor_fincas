import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthguardGuard } from './authguard.guard';
import { ListfincasComponent } from './fincas/listfincas/listfincas.component';
import { EditfincasComponent } from './fincas/editfincas/editfincas.component';
import { AddfincasComponent } from './fincas/addfincas/addfincas.component';
import { ListganadoComponent } from './ganado/listganado/listganado.component';
import { EditganadoComponent } from './ganado/editganado/editganado.component';
import { AddganadoComponent } from './ganado/addganado/addganado.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent,canActivate: [AuthguardGuard]},
  {path: 'listfincas', component: ListfincasComponent,canActivate: [AuthguardGuard]},
  {path: 'editfincas/:idfinca', component: EditfincasComponent,canActivate: [AuthguardGuard]},
  {path: 'addfincas', component: AddfincasComponent,canActivate: [AuthguardGuard]},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'listganado', component: ListganadoComponent,canActivate: [AuthguardGuard]},
  {path: 'editganado/:idganado', component: EditganadoComponent,canActivate: [AuthguardGuard]},
  {path: 'addganado', component: AddganadoComponent,canActivate: [AuthguardGuard]},
  {path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
