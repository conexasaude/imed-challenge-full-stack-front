import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, tap } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthService {
    private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this._isLoggedIn$.asObservable();

    constructor(private http: HttpClient, private loginService: LoginService) { 
        this._isLoggedIn$.next(!!this.token);
    }

    get token(){
        return localStorage.getItem('token')!;
    }

    login(user: String, pass: String){
        localStorage.removeItem('token');
        return this.loginService.login(user,pass).pipe(
            tap((response: any) => {
              this._isLoggedIn$.next(true);
              localStorage.setItem('token', response);
            })
          );
    }

    getUserType(){
        return this.loginService.getUserType().pipe(
            tap((response: any) => {
                return response;
            })
          );
    }

    newUserPatient(user: String, pass: String, name: String){
        localStorage.removeItem('token');
        return this.loginService.newUserPatient(user,pass, name).pipe(
            tap((response: any) => {
                return response;
            })
          );
    }

    newUserProfessional(user: String, pass: String, name: String, crm: String){
        localStorage.removeItem('token');
        return this.loginService.newUserProfessional(user,pass, name, crm).pipe(
            tap((response: any) => {
                return response;
            })
          );
    }

    
}