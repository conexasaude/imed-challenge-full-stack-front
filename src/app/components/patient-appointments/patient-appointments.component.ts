import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';
import { FormBuilder, Validators } from '@angular/forms';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthService } from 'src/app/authorization/auth.service';
import { Patient } from 'src/app/models/patient.model';
import { OnInit } from '@angular/core';
import { map, of } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.scss']
})
export class PatientAppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];

  displayedColumns = [
    'professional', 'begining', 'ending', 'status'
  ]

  constructor(
    private appointmentService: AppointmentService,
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef
  ) {  }

  ngOnInit() {
    const patient: Patient = this.authService.getUserLogedIn();
    this.appointmentService.fetchAppointmentsForPatient(patient.id)
      .pipe(
        map((response) => {
            return response.map((apt) => {
              apt.begining = moment(apt.begining).add('hours', 3).format('DD/MM/YYYY HH:mm');
              apt.ending = moment(apt.ending).add('hours', 3).format('DD/MM/YYYY HH:mm');
              return apt;
          }); 
        })
      )
      .subscribe((response) => {
        this.appointments = response;
      })
  }

  fetchAppointments() { }
    
}
