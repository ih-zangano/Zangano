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

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupformComponent },
  { path: 'login', component: LoginformComponent },
  { path: 'user', component: UserprofileComponent },
  { path: 'user/profile', component: UserDetailsComponent },
  { path: 'board', component: BoardComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'newtrack', component: NewtrackComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: '**', redirectTo: '' }
];
