import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const BASE_DOMAIN = 'http://localhost:3000';
const BASEURL = `${BASE_DOMAIN}/api/user`;


@Injectable()
export class UserService {
  constructor(private http: Http) {}

  editUser(id, user) {
    return this.http.put(`${BASEURL}/${id}/edit`, user).map(res => res.json());
  }
}
