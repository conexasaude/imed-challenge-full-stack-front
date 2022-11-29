import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/config/api.config";

@Injectable()   
export class AppointmentService {
    findAllProfessionalAppointments() {
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}/appointment/findAllProfessionalAppointments`);
    }
    findAllProfessionalPatients() {
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}/professional/findAllProfessionalPatients`);
    }
    deleteApp(id: any) {
        return this.http.post(`${API_CONFIG.baseUrl}/appointment/${id}`,{});
    }
    findAllByProfessionalIdAndDate(id: any, date: string) {
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}/appointment/findAllByProfessionalIdAndDate/${id}/${date}`);
    }
    findAllByProfessionalId(id:number) {
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}/appointment/findAllByProfessionalId/${id}`);
    }

    findAll() {
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}/appointment/findAll`);
    }
    

    newAppointment(professionalId: String, time: String, date: String) {
        let data = { professionalId: professionalId, time: time, date: date}
        return this.http.post<String>(`${API_CONFIG.baseUrl}/appointment/save`, data);
    }

    constructor(private http: HttpClient) { }


}