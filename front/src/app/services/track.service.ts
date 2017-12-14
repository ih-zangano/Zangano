import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';


const BASE_DOMAIN = 'http://localhost:3000';
const BASEURL = `${BASE_DOMAIN}/api/track`;


interface BagUser {
  track: Object;
}
@Injectable()
export class TrackService {
  private user: object;
  private bag: Array<object> = [];
  private track: object;
  private options = { withCredentials: true };

  constructor(private http: Http) {}
  getNewTrack(id, userId) {
    return this.http
      .get(`${BASEURL}/new?id=${id}&userId=${userId}`, this.options)
      .map(res => res.json());
  }
  getAll(id) {
    return this.http.get(`${BASEURL}/all?userId=${id}`, this.options).map(res => res.json());
  }
}



