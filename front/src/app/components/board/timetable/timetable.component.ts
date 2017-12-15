import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     $('.datepicker').pickadate({
       selectMonths: true, // Creates a dropdown to control month
       selectYears: 15, // Creates a dropdown of 15 years to control year,
       today: 'Today',
       clear: 'Clear',
       close: 'Ok',
       closeOnSelect: false // Close upon selecting a date,
     });
  }

}
