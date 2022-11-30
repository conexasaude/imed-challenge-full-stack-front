import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecureComponent } from './components/secure/secure.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './authorization/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PatientAppointmentsComponent } from './components/patient-appointments/patient-appointments.component';
import { ProfessionalAppointmentsComponent } from './components/professional-appointments/professional-appointments.component';
import { AppointmentViewComponent } from './components/appointment-view/appointment-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'secure', canActivate: [ AuthGuard ], component: SecureComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '404', canActivate: [ AuthGuard ], component: NotFoundComponent },
  { path: 'patient-appointments', canActivate: [ AuthGuard ], component: PatientAppointmentsComponent },
  { path: 'professional-appointments', component: ProfessionalAppointmentsComponent},
  { path: 'appointment-view', component: AppointmentViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
