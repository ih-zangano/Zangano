import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../routes';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  formInfo = {
    username: '',
    password: '',
    email: ''
  };

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {}

  signup() {
    const { username, password, email } = this.formInfo;
    if (username !== '' && password !== '' && email !== '') {
      this.auth
        .signup(username, password, email)
        .subscribe(user => this.router.navigate(['/board']));
    } else {
      console.log('You must set a username, password and email');
    }
  }
}
