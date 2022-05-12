import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//components
import { ScheduledAppointmentInformationComponent } from '../components/scheduled-appointment-information/scheduled-appointment-information.component';

//pipes

//directives
import { BrokenPictureDirective } from './directives/broken-picture.directive';
import { BoxThemeDirective } from './directives/box-theme.directive';
import { TimeAgoDirective } from './directives/time-ago.directive';

@NgModule({
  declarations: [ 
    ScheduledAppointmentInformationComponent,
    BrokenPictureDirective,
    BoxThemeDirective,
    TimeAgoDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ScheduledAppointmentInformationComponent,
    BrokenPictureDirective,
    BoxThemeDirective,
    TimeAgoDirective
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
