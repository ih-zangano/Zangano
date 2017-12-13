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

  constructor(public auth: AuthService,  private router: Router) {}

  ngOnInit() {}

  login() {
    if (this.formInfo.username !== '' || this.formInfo.password !== '') {
      this.auth
        .login(this.formInfo.username, this.formInfo.password)
        .subscribe(res => this.router.navigate(['/board']));
    }
  }
}
