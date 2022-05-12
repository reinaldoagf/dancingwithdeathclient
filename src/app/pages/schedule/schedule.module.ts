import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ScheduleModule { }
