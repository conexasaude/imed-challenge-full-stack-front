import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/config/api.config";

@Injectable()
export class LoginService {
    HTTPOptions:Object = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        responseType: 'text'
     }
    newUserPatient(login: String, password: String, name: String) {
        let data = { login: login, password: password, name: name}
        return this.http.post<String>(`${API_CONFIG.baseUrl}/api/user/save/patient`, data);
    }

    newUserProfessional(login: String, password: String, name: String, crm: String) {
        let data = { login: login, password: password , name: name , crm: crm}
        return this.http.post<String>(`${API_CONFIG.baseUrl}/api/user/save/professional`, data);
    }

    login(login: String, password: String):Observable<Object>{
        let data = { login: login, password: password }
        
        return this.http.post<String>(`${API_CONFIG.baseUrl}/login`, data, this.HTTPOptions);
    }

    getUserType():Observable<Object>{
        return this.http.get<String>(`${API_CONFIG.baseUrl}/api/user/getUserType`,this.HTTPOptions);
    }

    constructor(private http: HttpClient) { }


}