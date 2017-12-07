import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css']
})
export class LoginmodalComponent {

  username = '';
  password = '';

  constructor(private auth: AuthService) {}

  login(username, password) {
    username = this.username;
    password = this.password;
    this.auth.login(username, password).subscribe();
    console.log(this.username, this.password);
  }

  logout() {
    this.auth.logout().subscribe();
  }
}
