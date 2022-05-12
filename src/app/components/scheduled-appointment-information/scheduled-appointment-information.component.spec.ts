import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledAppointmentInformationComponent } from './scheduled-appointment-information.component';

describe('ScheduledAppointmentInformationComponent', () => {
  let component: ScheduledAppointmentInformationComponent;
  let fixture: ComponentFixture<ScheduledAppointmentInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledAppointmentInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledAppointmentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
