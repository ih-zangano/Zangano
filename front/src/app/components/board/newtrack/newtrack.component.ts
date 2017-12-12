import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-newtrack',
  templateUrl: './newtrack.component.html',
  styleUrls: ['./newtrack.component.css']
})
export class NewtrackComponent implements OnInit {
  constructor(  ) {}
  ngOnInit() { }
}
