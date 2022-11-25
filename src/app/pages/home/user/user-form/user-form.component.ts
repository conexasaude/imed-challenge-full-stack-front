import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  form: FormGroup | any;
  closeMessage: string = '';
  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {}

  initForm(): void {
    this.form = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthDate: new FormControl(null, Validators.required),
      address: new FormControl('', Validators.required),
    });
  }

  onClose() {
    this.closeMessage = 'The alert has been closed';
  }

  onSubmint() {
    this.submitBtnState = ClrLoadingState.LOADING;
    //Submit Logic
    console.log('this.form :>> ', this.form);
    this.submitBtnState = ClrLoadingState.DEFAULT;
  }
}
