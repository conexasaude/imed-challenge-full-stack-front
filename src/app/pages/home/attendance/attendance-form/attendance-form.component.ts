import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { ApiService } from 'src/app/services/api.service';

export enum SpecialtyType {
  ALLERGY = 0,
  ANESTHESIOLOGY = 1,
  DERMATOLOGY = 2,
  IMMUNOLOGY = 3,
  NEUROLOGY = 4
}

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.css'],
  providers: [DatePipe]
})
export class AttendanceFormComponent implements OnInit {
  form: FormGroup | any;
  date: Date | any;
  minDate: any;
  closeMessage: string = '';
  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public SpecialtyType = SpecialtyType;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private datePipe: DatePipe
  ) {
    this.minDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      firstName: new FormControl('Thiago Sena', Validators.required),
      name: new FormControl('Thiago Sena', Validators.required),
      date: new FormControl(null, Validators.required),
      specialty: new FormControl('', Validators.required),
      healthProfessional: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
    this.form.get('firstName').disable();
  }

  onClose() {
    this.closeMessage = 'The alert has been closed';
  }

  onSubmint() {
    this.submitBtnState = ClrLoadingState.LOADING;
    //Submit Logic
    if (this.form.valid) {
      let dtPipe = this.datePipe.transform(new Date(), "yyyy-MM-ddTHH:mm:ss");
      console.log('dtPipe :>> ', dtPipe);
      console.log('object :>> ', new Date().toISOString());
      // this.form.get('date').setValue(this.date);
      // console.log('object :>> ', this.date);
      // this.apiService.post('/attendance', this.form.value).subscribe((res) => {
      //   console.log('res >> ', res);
      // });
    }
    console.log('this.form :>> ', this.form.value);
    this.form.reset();
    this.submitBtnState = ClrLoadingState.SUCCESS;
  }

  isFormSubmint(): boolean {
    return this.submitBtnState === ClrLoadingState.SUCCESS;
  }

}
