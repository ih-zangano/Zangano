import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../routes';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  title: String = 'User Profile';
  user: object;

  constructor(public auth: AuthService, private appCom: AppComponent) {
    this.auth.isLoggedIn().subscribe(user => (this.user = user));
  }

  ngOnInit() {}
}
