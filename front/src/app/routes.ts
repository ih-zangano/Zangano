import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { LoginformComponent } from './components/loginform/loginform.component';
import { SignupformComponent } from './components/signupform/signupform.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './components//userprofile/user-details/user-details.component';

import { HomeComponent } from './components/home/home.component';
import { UserprofileComponent } from './components//userprofile/userprofile.component';
import { Component } from '@angular/core';
import { BoardComponent } from './components/board/board.component';
import { NewtrackComponent } from './components/board/newtrack/newtrack.component';
import { TimetableComponent } from './components/board/timetable/timetable.component';
import { CollectionComponent } from './components/board/collection/collection.component';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupformComponent },
  { path: 'login', component: LoginformComponent },
  {
    path: 'user',
    component: UserprofileComponent,
    canActivate: [IsLoggedInService]
  },
  {
    path: 'profile',
    component: UserDetailsComponent,
    canActivate: [IsLoggedInService]
  },
  {
    path: 'board',
    component: BoardComponent,
    canActivate: [IsLoggedInService]
  },
  {
    path: 'collection',
    component: CollectionComponent,
    canActivate: [IsLoggedInService]
  },
  {
    path: 'newtrack',
    component: NewtrackComponent,
    canActivate: [IsLoggedInService]
  },
  {
    path: 'timetable',
    component: TimetableComponent,
    canActivate: [IsLoggedInService]
  },
  { path: '**', redirectTo: '' }
];
