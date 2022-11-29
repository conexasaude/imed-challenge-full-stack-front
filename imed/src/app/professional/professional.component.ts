import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  itens= [
    { name: 'Minha agenda', route: 'professional/professionalAppointments'},
    { name: 'Meus pacientes', route: 'professional/professionalPatients' }
  ]
}
