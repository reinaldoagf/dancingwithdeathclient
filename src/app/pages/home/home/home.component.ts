import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { RestService } from 'src/app/core/services/rest.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  today: Date= new Date();
  model: NgbDateStruct = this.calendar.getToday();
  schedules:any=[];
  constructor(private calendar: NgbCalendar,
    private restService: RestService,
    private spinner: NgxSpinnerService,) {}

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
  confirmDelete(element:any){
    Swal.fire({
      title: 'Confirmar operación',
      text: '¿Desea eliminarla cita?',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, Cancelar'
    }).then(async (result:any) => {
      if (result.value) {
        try {
          this.spinner.show();
          const response: any = await this.restService.delete(`/schedules/delete/${element.id}`).toPromise();
          this.spinner.hide();
          if (response.data) {
            this.schedules = this.schedules.filter((e:any) => e.id !== response.data.id);
            Swal.fire('Operación exitosa', response.message, 'success')
              
          }
        } catch (error) {
          this.spinner.hide();
          console.log(error)
        }
      }
    });
  }
}
