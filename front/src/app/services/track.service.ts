import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const BASE_DOMAIN = 'http://localhost:3000';
const BASEURL = `${BASE_DOMAIN}/api`;

@Injectable()
export class TrackService {
