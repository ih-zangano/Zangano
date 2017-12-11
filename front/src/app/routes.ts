import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { LoginformComponent } from './components/loginform/loginform.component';
import { SignupformComponent } from './components/signupform/signupform.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './components//userprofile/user-details/user-details.component';

import { HomeComponent } from './components/home/home.component';
import { UserprofileComponent } from './components//userprofile/userprofile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'user',
    component: UserprofileComponent
    },
  {
    path: 'user/profile',
    component: UserDetailsComponent
  },
  { path: 'login', component: LoginformComponent },
  { path: 'signup', component: SignupformComponent },
  { path: '**', redirectTo: '' }
];
