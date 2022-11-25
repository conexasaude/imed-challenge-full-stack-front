import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  model = {
    type: '',
    username: '',
    password: '',
    rememberMe: false,
  };

  reactiveModel = this.fb.group({
    type: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false, Validators.required),
  });

  login(): void {
    this.authService.login('pro1', 'pro2').subscribe((res) => {
      console.log('res >> ', res);
    });
  }
}
