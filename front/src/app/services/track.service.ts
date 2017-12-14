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
  private bag: Array<Object> = [];
  private track: Object;
  private options = { withCredentials: true };

  constructor(private http: Http) {}
  getNewTrack(id) {
    return this.http.get(`${BASEURL}/new?id=${id}`, this.options).map(res => res.json());
  }
  getAll() {
    return this.http.get(`${BASEURL}/all`, this.options).map(res => res.json());
  }
}



