import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { RestService } from 'src/app/core/services/rest.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  today: Date = new Date();
  model: NgbDateStruct = this.calendar.getToday();
  time: any = null;
  date: { year: number | null, month: number | null } = { year: null, month: null };
  times: any[] = [
    { value: '9 am', available: true },
    { value: '10 am', available: true },
    { value: '11 am', available: true },
    { value: '12 pm', available: true },
    { value: '1 pm', available: true },
    { value: '2 pm', available: true },
    { value: '3 pm', available: true },
    { value: '4 pm', available: true },
    { value: '5 pm', available: true },
    { value: '6 pm', available: true }
  ];
  constructor(private calendar: NgbCalendar,
    private restService: RestService,
    private spinner: NgxSpinnerService,) {
  }
  get markDisabled(){
    return (date: NgbDate) => { return this.calendar.getWeekday(date) >= 6 }
  }
  ngOnInit(): void {
    const date = new Date(this.model.year, this.model.month - 1, this.model.day);
    this.getAvailableTimes(moment(date).format('DD/MM/yyyy'));
  }
  onNavigate($event: any) {
    this.date = $event.next;
  }
  async scheduleAnAppointment(): Promise<void> {
    const date = new Date(this.model.year, this.model.month - 1, this.model.day);
    if (!this.model || !this.time) {
      Swal.fire('Atención', 'Debe seleccionar la fecha y la hora para agendar la cita', 'error')
    } else {
      Swal.fire({
        title: 'Envía tu dirección de correo electrónico',
        input: 'email',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        showLoaderOnConfirm: true,
      }).then(async (result) => {
        if (result.isConfirmed && result.value) {
          try {
            this.spinner.show();
            const response: any = await this.restService.post('/schedules/appointment', {
              date: moment(date).format('DD/MM/yyyy'),
              time: this.time,
              email: result.value
            }).toPromise();
            this.spinner.hide();
            if (response.data) {
              Swal.fire('Operación exitosa', `Tienes una cita para bailar con la muerte el ${response.data.date} a las ${response.data.time}`, 'success')
              this.times = this.times.map(e =>{
                e.available =  response.data.time === e.value ? false : e.available;
                return e;
              })
            }
          } catch (error) {
            this.spinner.hide();
            console.log(error)
          }
        }
      })
    }
  }
  async getAvailableTimes(date: any): Promise<void> {
    try {
      this.spinner.show();
      const response: any = await this.restService.post('/schedules/date', {
        date
      }).toPromise();
      this.spinner.hide();
      if (response.data) {
        this.times = this.times.map(e =>{
          e.available = response.data.some((item:any) => item.time === e.value) ? false : true;
          return e;
        })
      }
    } catch (error) {
      this.spinner.hide();
      console.log(error)
    }
  }
  onNgModelChange($event: any) {
    const date = new Date(this.model.year, this.model.month - 1, this.model.day);
    this.getAvailableTimes(moment(date).format('DD/MM/yyyy'))
  }
}
