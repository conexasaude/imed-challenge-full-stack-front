import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppointmentsComponent } from './patient-appointments.component';

describe('PatientAppointmentsComponent', () => {
  let component: PatientAppointmentsComponent;
  let fixture: ComponentFixture<PatientAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
