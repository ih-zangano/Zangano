import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { routes } from './routes';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './services/user.service';
import { SignupformComponent } from './components/signupform/signupform.component';
import { HomeComponent } from './components/home/home.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { UserDetailsComponent } from './components/userprofile/user-details/user-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { BoardComponent } from './components/board/board.component';
import { CollectionComponent } from './components/board/collection/collection.component';
import { NewtrackComponent } from './components/board/newtrack/newtrack.component';
import { TimetableComponent } from './components/board/timetable/timetable.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupformComponent,
    HomeComponent,
    UserprofileComponent,
    UserDetailsComponent,
    TruncatePipe,
    FilterPipe,
    BoardComponent,
    CollectionComponent,
    NewtrackComponent,
    TimetableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [AuthService, MediaMatcher, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
