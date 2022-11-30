import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, mergeMap, tap } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  URL = 'http://localhost:8081/api/appointments';

  constructor(private http: HttpClient) { }

  fetchAppointmentsForPatient(id: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.URL + `/patient/${id}`)
  }
}
