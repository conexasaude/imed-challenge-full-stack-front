import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalAppointmentsComponent } from './professional-appointments.component';

describe('ProfessionalAppointmentsComponent', () => {
  let component: ProfessionalAppointmentsComponent;
  let fixture: ComponentFixture<ProfessionalAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
