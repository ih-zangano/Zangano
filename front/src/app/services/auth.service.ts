import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

const BASE_DOMAIN = 'environment.baseurl';
const BASE_URL = `${BASE_DOMAIN}/api`;

@Injectable()
export class AuthService {
  options: object = {
    withCredentials: true
  };
  user = {
    _id: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    bag: []
  };
  private loginEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    const error_message = e.json().message;
    console.error(error_message);
    return Observable.throw(e.json().message);
  }
  private emitUserLoginEvent(user) {
    this.user = user;
    this.loginEvent.emit(user);
    return user;
  }

  handleUser(obj) {
    this.user = obj;
    this.loginEvent.emit(this.user);
    return this.user;
  }

  signup(username: string, password: string, email: string) {
    return this.http
      .post(`${BASE_URL}/auth/signup`, { username, password, email }, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handleError);
  }

  login(username: string, password: string) {
    return this.http
      .post(`${BASE_URL}/auth/login`, { username, password }, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handleError);
  }
  public getUser() {
    return this.user;
  }
  logout() {
    return this.http
      .get(`${BASE_URL}/auth/logout`, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(null))
      .catch(this.handleError);
  }


  isLoggedIn() {
      return this.http.get(`${BASE_URL}/auth/loggedin`, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
  }
  sendMail() {
    return this.http
      .post(`${BASE_URL}/email/sendEmail`, this.user, this.options)
      .map(res => res.json());
  }
}
