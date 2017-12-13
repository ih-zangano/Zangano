import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TrackService } from '../../../services/track.service';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-newtrack',
  templateUrl: './newtrack.component.html',
  styleUrls: ['./newtrack.component.css']
})
export class NewtrackComponent implements OnInit {
  public track;
  private user;
  public idTrack;

  constructor(
    private routes: ActivatedRoute,
    private trackServices: TrackService,
    private authService: AuthService,
    private http: Http,
    private router: Router
  ) {}
  ngOnInit() {}

  newTrack(id) {
    this.trackServices.getNewTrack(id).subscribe(track => console.log(track));
  }
}
