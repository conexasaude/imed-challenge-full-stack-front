import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/services/appointment.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients: any;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.findAllProfessionalAppointments().subscribe((response: any)=>{
      response = response.filter((v: {patient: any; login: any; },
        i: any,a: any[])=>
        a.findIndex(v2=>(v2.patient.login===v.patient.login))===i)

      this.patients = response
    });
  }

}
