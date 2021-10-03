import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
const routes: Routes = [
  {path:"register" ,component:SignUpComponent},
  {path:"profile",component:ProfileComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"edit",component:EditUserComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
