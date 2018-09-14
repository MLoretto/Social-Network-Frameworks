import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './pages/wall/wall.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';


const routes: Routes = [
  
  { path: '' , component: LoginComponent},
  { path: 'muro', component: WallComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'perfileditar', component: CreateProfileComponent},
  { path: 'crearcuenta', component: CreateAccountComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
