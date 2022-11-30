import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { TokenService } from './token.service';

const OAUTH_CLIENT = 'express-client';
const OAUTH_SECRET = 'express-secret';
const AUTH_SERVER_API_URL = 'http://localhost:3000/';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET)
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl = '';

  constructor(private http: HttpClient, private tokenService: TokenService, /*private jwtHelper: JwtHelperService*/) {  }

  login(loginData: any): Observable<any> {
    // this.tokenService.removeToken();
    // this.tokenService.removeRefreshToken();
    // const body = new HttpParams()
    //   .set('username', loginData.username)
    //   .set('password', loginData.password)
    //   .set('grant_type', 'password');

    // return this.http.post<any>(AUTH_SERVER_API_URL + 'oauth/token', body, HTTP_OPTIONS)
    //   .pipe(
    //     tap(res => {
    //       this.tokenService.saveToken(res.access_token);
    //       this.tokenService.saveRefreshToken(res.refresh_token);
    //       return res.roles;
    //     }),
    //     catchError(AuthService.handleError)
    //   );

    if(loginData && loginData.password) {
      return this.http.post("http://localhost:8081/api/login/patient", loginData);
    }

    return this.http.post("http://localhost:8081/api/login/professional", loginData);
  }

  refreshToken(refreshData: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      .set('refresh_token', refreshData.refresh_token)
      .set('grant_type', 'refresh_token');
    return this.http.post<any>(AUTH_SERVER_API_URL + 'oauth/token', body, HTTP_OPTIONS)
      .pipe(
        tap(res => {
          this.tokenService.saveToken(res.access_token);
          this.tokenService.saveRefreshToken(res.refresh_token);
        }),
        catchError(AuthService.handleError)
      );
  }

  logout(): void {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(AUTH_SERVER_API_URL + 'oauth/signup', data)
      .pipe(
        tap(_ => AuthService.log('register')),
        catchError(AuthService.handleError)
      );
  }

  secured(): Observable<any> {
    return this.http.get<any>(AUTH_SERVER_API_URL + 'secret')
      .pipe(catchError(AuthService.handleError));
  }

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error(
      'Something bad happened; please try again later.'
      )
    )
  }

  getUserLogedIn(): any {
    //const token = this.jwtHelper.decodeToken(this.tokenService.getToken());
    //decodificar o token e pegar as informações dos usuários.
    return JSON.parse(localStorage.getItem('userlogged') ?? '');
  }

  private static log(message: string): any {
    console.log(message);
  }
}
