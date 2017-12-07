import { Routes } from '@angular/router';
import { LoginmodalComponent } from './components/loginmodal/loginmodal.component';

export const routes: Routes = [
  { path: 'login', component: LoginmodalComponent }, // { path: 'signup', component: SignupformComponent },
  { path: '**', redirectTo: '' }
];
