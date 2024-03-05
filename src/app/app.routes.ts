import { Routes } from '@angular/router';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: "sign-up", component: SignUpComponent},
    {path: "login", component: LoginComponent},
    {path: "home", component: HomeComponent},
    {path: "forgot-password", component: ForgotPasswordComponent},
    {path: "**", redirectTo:''}
];
