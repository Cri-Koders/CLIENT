import { Routes } from '@angular/router';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
    {path: "sign-up", component: SignUpComponent},
    {path: "login", component: LoginComponent},
];
