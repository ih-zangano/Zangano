import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Title } from '@angular/platform-browser';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Local';
  user: object;

  constructor(public auth: AuthService, private titleService: Title) {
    this.setTitle(this.title);
  }

  logout() {
    this.auth.logout().subscribe();
    $('.button-collapse').sideNav();
  }

  public setTitle(newTitle) {
    this.titleService.setTitle(newTitle);
  }
}
