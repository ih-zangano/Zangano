import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './routes';
import { HttpModule } from '@angular/http';

import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { SidenavResponsiveComponent } from './components/sidenav-responsive/sidenav-responsive.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { LoginformComponent } from './components/loginform/loginform.component';


@NgModule({
  declarations: [AppComponent, SidenavResponsiveComponent, LoginformComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
