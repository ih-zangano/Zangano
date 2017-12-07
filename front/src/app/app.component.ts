import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';
  password = '';

  constructor(private auth: AuthService) {}

  login(username, password) {
    username = this.username;
    password = this.password;
    this.auth.login(username, password).subscribe();
  }

  logout() {
    this.auth.logout().subscribe();
  }
}
