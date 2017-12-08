import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './routes';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppComponent, LoginformComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [AuthService, MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule {}
