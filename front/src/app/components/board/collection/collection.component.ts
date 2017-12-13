import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { TrackService } from '../../../services/track.service';

declare var $;

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  user;
  bag;
  track;
  constructor( private trackService: TrackService,
    private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    this.authService.isLoggedIn()
      .subscribe( user => {
        this.user = user;
        this.trackService.getAll().subscribe(track => (this.track = track));
      });
  }

  }

