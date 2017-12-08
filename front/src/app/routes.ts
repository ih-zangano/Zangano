import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { LoginformComponent } from './components/loginform/loginform.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginformComponent },
  { path: '**', redirectTo: '' }
];
