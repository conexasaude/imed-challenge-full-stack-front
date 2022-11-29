import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  itens= [
    { name: 'Minha agenda', route: 'patient/patientAppointments',},
    { name: 'Agendar consulta', route: 'patient/patientDoctors', }
  ]
}
