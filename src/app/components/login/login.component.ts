import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authorization/auth.service';
import { AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  hide = true;
  loginData: {username: string, password: string} = {username: '',password: ''};

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {  }

  ngAfterViewInit() {
    console.log(this.authService.getUserLogedIn());
    if(this.authService.getUserLogedIn()) {
      this.decidePath(this.authService.getUserLogedIn());
    }
  }

  loginForm = this.fb.group(
    {
      username: [this.loginData.username || '', Validators.required],
      password: this.loginData.password || ''
    }
  );

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = {username: this.loginForm.value.username, password: this.loginForm.value.password};
      this.authService.login(loginData).subscribe((response) => {
        localStorage.setItem('userlogged', JSON.stringify(response));
        console.log(response);
        this.decidePath(response);
      });
    }
  }

  decidePath(responseToLogin: any) {
    if (responseToLogin && Object.hasOwn(responseToLogin, 'totalAppointments')) {
      this.router.navigate(['/patient-appointments']);
    } else if (responseToLogin && Object.hasOwn(responseToLogin, 'crm')) {
      this.router.navigate(['/professional-appointments']);
    } else {
      console.log("login invalido");
    }
  }
}
