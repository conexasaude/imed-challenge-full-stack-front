import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentService } from 'src/services/appointment.service';

@Component({
  selector: 'app-app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.scss']
})
export class AppDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private appointmentService: AppointmentService,
    private formBuilder: FormBuilder,

    ) {
      console.log(data);
      this.data = {...data};
    }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteApp(){
    this.appointmentService.deleteApp(this.data.id).subscribe(response=>{
      this.dialogRef.close();
    });
  }

}
