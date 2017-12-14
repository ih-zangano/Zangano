import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { TrackService } from '../../../services/track.service';
import { UserService } from '../../../services/user.service';

declare var $;

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  bag: Array<Object> = [];

  constructor(
    private trackService: TrackService,
    private authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit() {
    setTimeout(() => {
    }, 1000);
    this.trackService.getAll(this.authService.user._id).subscribe(user => {
      this.bag = user.bag;
    });
    }

}

