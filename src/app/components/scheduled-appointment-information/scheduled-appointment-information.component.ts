import { Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { RestService } from 'src/app/core/services/rest.service';
import * as moment from 'moment';

@Component({
  selector: 'app-scheduled-appointment-information',
  templateUrl: './scheduled-appointment-information.component.html',
  styleUrls: ['./scheduled-appointment-information.component.scss']
})
export class ScheduledAppointmentInformationComponent implements OnInit {
  @Input('today') today:any = null;
  @Input('dateSelected') dateSelected:any = null;
  schedules:any=[];
  get allScheduledAppointments(){
    return this.schedules
  }
  get currentScheduledAppointments(){
    return this.schedules.filter((e:any) => moment(e.date, 'DD/MM/yyyy').format('MM')  == moment(this.today, 'DD/MM/yyyy').format('MM') )
  }
  get selectedScheduledAppointments(){
    return this.schedules.filter((e:any) => moment(e.date, 'DD/MM/yyyy').format('MM')  == moment(new Date(this.dateSelected.year, this.dateSelected.month - 1, this.dateSelected.day), 'DD/MM/yyyy').format('MM') )
  }
  constructor(
    private restService: RestService,
    private spinner: NgxSpinnerService,) {}
  ngOnChanges(changes: SimpleChanges) {
        
    // console.log( new Date(changes['dateSelected'].currentValue.year, changes['dateSelected'].currentValue.month - 1, changes['dateSelected'].currentValue.day))
    
}
  ngOnInit(): void {
    this.getScheduledAppointments();
  }
  async getScheduledAppointments(): Promise<void> {
    try {
      this.spinner.show();
      const response: any = await this.restService.get('/schedules/all').toPromise();
      this.spinner.hide();
      if (response.data) {
        this.schedules = response.data;
      }
    } catch (error) {
      this.spinner.hide();
      console.log(error)
    }
  }
}
