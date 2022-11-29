import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from 'src/services/AuthService';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  msg: string|undefined;
  page = true
  prof = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    login: '',
    pass: ''
  });

  newUserForm = this.formBuilder.group({
    login: '',
    pass: '',
    passConfirm:'',
    name:'',
    crm:'',
  });

  onSubmit(): void {
    this.authService.login(this.loginForm.value.login!, this.loginForm.value.pass!).subscribe((response: any)=>{
      this.authService.getUserType().subscribe(response=>{
        if(response=="PATIENT"){
          this.router.navigate(['/patient/patientAppointments'])
        }else if(response=="PROFESSIONAL"){
          this.router.navigate(['/professional/professionalAppointments'])
        }
      })
    },err => {
      this.msg = "Login ou senha invalidos, por favor tente novamente!"
    });
  }

  newUser(){
    if((this.newUserForm.value.pass == this.newUserForm.value.passConfirm)){
      if(this.prof){
        this.authService.newUserProfessional(this.newUserForm.value.login!, this.newUserForm.value.pass!, this.newUserForm.value.name!, this.newUserForm.value.crm!).subscribe((response: any)=>{
          this.page=true;
        });
      }else{
        this.authService.newUserPatient(this.newUserForm.value.login!, this.newUserForm.value.pass!, this.newUserForm.value.name!).subscribe((response: any)=>{
          this.page=true;
        });
      }
    }

  }

}
