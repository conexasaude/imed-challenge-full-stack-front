import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDialogComponent } from './doctor-dialog.component';

describe('DoctorDialogComponent', () => {
  let component: DoctorDialogComponent;
  let fixture: ComponentFixture<DoctorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
