import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRequest } from '../pages/login/login-request';
import { RegistrationRequest } from '../pages/registration/registration-request';
import { ApiService } from './api.service';

const CLIENT_ID = 'imed-challenge'
const CLIENT_SECRET = 'imed-challenge'
const AUTH_API = 'http://localhost:8090/api/v1/oauth/';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly LOGIN_PATH: string = '/login';
  private readonly REGISTRATION_PATH: string = '/register';

  constructor(private apiService: ApiService, private router: Router, private http: HttpClient) { }

  navigateToDashboardPageIfLoggedIn() {
    const loggedIn = this.isLoggedIn();

    if (loggedIn) {
      this.router.navigate(['dashboard']);
    }
  }

  getToken(): string | any {
    return sessionStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // login(loginRequest: LoginRequest) {
  //   return this.apiService
  //     .post(this.LOGIN_PATH, loginRequest)
  //     .subscribe((resp) => {
  //       sessionStorage.setItem('token', resp.token);
  //       this.router.navigate(['dashboard']);
  //     });
  // }

  login(username: string, password: string): Observable<any> {
    let params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('username', username);
    params.append('password', password);
    const HTTP_OPTIONS = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
      })
    };
    return this.http.post(
      AUTH_API + 'token',
      params,
      HTTP_OPTIONS
    );
  }

  registration(registrationRequest: RegistrationRequest) {
    return this.apiService
      .post(this.REGISTRATION_PATH, registrationRequest)
      .subscribe((resp) => {
        const loginRequest = {} as LoginRequest;
        loginRequest.username = registrationRequest.username;
        loginRequest.password = registrationRequest.password;
        // this.login(loginRequest);
      });
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
