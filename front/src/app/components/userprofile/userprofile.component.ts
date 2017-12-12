import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppComponent } from '../../app.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../routes';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  title: String = 'Zangano - User Profile';
  user: object;

  constructor(public auth: AuthService, private appCom: AppComponent) {
    this.auth.isLoggedIn().subscribe(user => (this.user = user));
  }

  ngOnInit() {}
}
