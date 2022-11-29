import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, EventClickArg } from '@fullcalendar/angular';
import { AppointmentService } from 'src/services/appointment.service';
import { AppDialogComponent } from './app-dialog/app-dialog.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  appointments: any[] | undefined;

  constructor(
    private appointmentService: AppointmentService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.appointmentService.findAllProfessionalAppointments().subscribe(response=>{
      console.log(response)
      this.appointments =response; 
      let events: { title: string; date: any; eventId: any;}[] = [];
      response.forEach(app => {
        events.push({title: 'Sr.(a): '+app.patient.name+'. Às: '+app.time, date: app.date, eventId: app.id })
      });
      this.calendarOptions.events = events;
    });
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    eventClick:this.eventClick.bind(this),
    events: []
  };

  handleDateClick(arg: Object) {
    console.log(arg)
  }
  
  eventClick(arg: EventClickArg) {
    this.openDialog(this.appointments?.find(i => i.id == arg.event._def.extendedProps['eventId']))
  }

  openDialog(arg:Object){
    console.log(arg)
    const dialogRef = this.dialog.open(AppDialogComponent,{
      data: arg,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }

}
