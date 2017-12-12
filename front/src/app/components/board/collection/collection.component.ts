import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

declare var $;

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {

    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }
}
