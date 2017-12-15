import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../routes';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';

declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, public auth: AuthService) {}
  user: object;
  ngOnInit() {
    setInterval(() => {
      if (this.auth.user) {
        this.user = this.auth.user;
      } else {
        this.user = undefined;
      }
    }, 1000);
    $('.button-collapse').sideNav({
      closeOnClick: true,
      menuWidth: 250,
      draggable: true
    });
  }
  logout() {
    this.auth.logout().subscribe(res => this.router.navigate(['/init']));
  }
}
