import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }
  filterFrom(event:any){
    console.log(event.target.value);
  }
}
