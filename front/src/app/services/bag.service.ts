import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const BASEURL = environment.BASEURL + '/api/bag';

@Injectable()
export class BagService {
  private bag: object;
  private options = { withCredentials: true };

  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${BASEURL}/`, this.options).map(res => res.json());
  }

  getOne(id) {
    return this.http
      .get(`${BASEURL}/${id}`, this.options)
      .map(res => res.json());
  }

  createNewTrack(product) {
    return this.http
      .post(`${BASEURL}/new`, product, this.options)
      .map(res => res.json());
  }

  deleteTrack(id) {
    return this.http
      .delete(`${BASEURL}/${id}/delete`, this.options)
      .map(res => res.json());
  }
}
