import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentService } from 'src/services/appointment.service';

@Component({
  selector: 'app-doctor-dialog',
  templateUrl: './doctor-dialog.component.html',
  styleUrls: ['./doctor-dialog.component.scss']
})
export class DoctorDialogComponent implements OnInit {
  times: any;
  date: '' | undefined


  constructor(
    public dialogRef: MatDialogRef<DoctorDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private appointmentService: AppointmentService,
    private formBuilder: FormBuilder,

    ) {
      console.log(data);
      this.data = {...data};
    }

  ngOnInit(): void {
  }

  loadTimes(data: any){
    this.times = [];

    for (let i = 0; i < 24; i++) {
      this.times[i] = (i+":00");
    }
    let date = "";
    this.appointmentService.findAllByProfessionalIdAndDate(this.data.id, data.value).subscribe(response=>{
      response.forEach(app => {
        this.times.splice(this.times.indexOf(app.time),1);
      });
    });
  }

  appointmentForm = this.formBuilder.group({
    timer: '',
    date:''
  });

  onNoClick(): void {
    this.dialogRef.close();
  }

  newApp(){
    console.log(this.appointmentForm.value)
    if(this.appointmentForm.value.timer && this.appointmentForm.value.date!){
      this.appointmentService.newAppointment(this.data.id,this.appointmentForm.value.timer!,this.appointmentForm.value.date!).subscribe(response=>{
        console.log(response);
        this.dialogRef.close();
      });
    }
    
  }

 

}
