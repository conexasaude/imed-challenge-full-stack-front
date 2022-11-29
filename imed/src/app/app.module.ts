import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { MenuComponent } from './menu/menu.component';
import { AppointmentsComponent } from './patient/appointments/appointments.component';
import { AppointmentsComponent as ProfessionalAppointmentsComponent } from './professional/appointments/appointments.component';

import { DoctorsComponent } from './patient/doctors/doctors.component';
import { FullCalendarModule } from '@fullcalendar/angular';


import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorDialogComponent } from './patient/doctors/doctor-dialog/doctor-dialog.component';
import { AuthService } from 'src/services/AuthService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuardGuard } from './auth-guard.guard';
import { AuthInterceptorInterceptorProvider } from './auth-interceptor.interceptor';
import { LoginService } from 'src/services/login.service';
import { DoctorService } from 'src/services/doctor.service';
import { PatientService } from 'src/services/patient.service';
import { ProfessionalService } from 'src/services/professional.service';
import { AppointmentService } from 'src/services/appointment.service';
import { AppDialogComponent } from './patient/appointments/app-dialog/app-dialog.component';
import { ProfessionalComponent } from './professional/professional.component';
import { PatientsComponent } from './professional/patients/patients.component';



FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientComponent,
    MenuComponent,
    AppointmentsComponent,
    DoctorsComponent,
    DoctorDialogComponent,
    AppDialogComponent,
    ProfessionalComponent,
    PatientsComponent,
    ProfessionalAppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [
    AuthService,
    AuthGuardGuard,
    AuthInterceptorInterceptorProvider,
    LoginService,
    DoctorService,
    PatientService,
    ProfessionalService,
    AppointmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
