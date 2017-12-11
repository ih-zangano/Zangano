import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../routes';
 import { Router } from '@angular/router';
 import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formInfo: LoginForm = {
    username: '',
    password: ''
  };

  message: string;

  constructor(public auth: AuthService) {}

  ngOnInit() {}

  login() {
    const { username, password } = this.formInfo;
    if (username !== '' && password !== '') {
      this.auth
        .login(username, password)
        .map(() => {})
        .subscribe(
          () => {},
          err => {
            this.message = err;
            this.formInfo = { username: '', password: '' };
          }
        );
    } else {
      this.message = 'You must set a username and a password';
    }
  }
}
