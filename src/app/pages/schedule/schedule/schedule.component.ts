import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  today: Date= new Date();
  model: NgbDateStruct | null = this.calendar.getToday();
  date: {year: number | null, month: number | null} = {year:null,month:null};
  times:any[]=[
    {value:'9 am',available:true},
    {value:'10 am',available:true},
    {value:'11 am',available:true},
    {value:'12 pm',available:true},
    {value:'1 pm',available:false},
    {value:'2 pm',available:true},
    {value:'3 pm',available:false},
    {value:'4 pm',available:true},
    {value:'6 pm',available:true}
  ];

  constructor(private calendar: NgbCalendar) {
  }
  ngOnInit(): void {
  }
  onNavigate($event:any){
    this.date = $event.next
  }
  onNgModelChange($event:any){
    console.log('$event:',$event)
    const selected = moment($event).format('D MMM YYYY');
    console.log('selected:',selected)
  }
}
