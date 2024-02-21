import { Routes } from '@angular/router';
import { SignUpComponent } from './views/sign-up/sign-up.component';

export const routes: Routes = [
    { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
    { path: "sign-up", component: SignUpComponent },
];
