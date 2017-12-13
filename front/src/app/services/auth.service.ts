import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

const BASE_DOMAIN = 'http://localhost:3000';
const BASE_URL = `${BASE_DOMAIN}/api`;

@Injectable()
export class AuthService {
  private options: object = {
    withCredentials: true
  };
  public user: object;
  private userLoginEvent: EventEmitter<object> = new EventEmitter();

  constructor(private http: Http, private router: Router) {
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    const error_message = e.json().message;
    return Observable.throw(e.json().message);
  }

  public getLoginEventEmitter(): EventEmitter<any> {
    return this.userLoginEvent;
  }

  public getUser() {
    return this.user;
  }
  private emitUserLoginEvent(user) {
    this.user = user;
    this.userLoginEvent.emit(user);
    return user;
  }

  signup(username: string, password: string, email: string) {
    return this.http
      .post(
        `${BASE_URL}/auth/signup`,
        { username, password, email },
        this.options
      )
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .map(() => this.router.navigate(['/board']))
      .catch(this.handleError);
  }

  login(username: string, password: string) {
    return this.http
      .post(`${BASE_URL}/auth/login`, { username, password }, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handleError);
  }

  logout() {
    return this.http
      .get(`${BASE_URL}/auth/logout`, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(null))
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http
      .get(`${BASE_URL}/auth/loggedin`, this.options)
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
