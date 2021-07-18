import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceConfig } from 'src/app/config/service-config';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})
export class AdminPaymentService {
  private entity='payments'
  constructor(private http: HttpClient,
    private securityService: SecurityService){
      //this.token = this.securityService.getToken()
    }
  saveNewRecord(formData:FormData){
    return this.http.post<any>(`${ServiceConfig.BASE_URL}${this.entity}`, formData)
  }

}
