import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { PaymentModel } from 'src/app/models/payment/payment.model';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})
export class AdminPaymentService {
  private entity='payments'
  private requests='requests'
  constructor(private http: HttpClient,
    private securityService: SecurityService){
      //this.token = this.securityService.getToken()
    }
  saveNewRecord(formData:FormData){
    return this.http.post<any>(`${ServiceConfig.BASE_URL}${this.entity}`, formData)
  }
  getRecordsByRequestId(recordId: String): Observable<PaymentModel[]> {
    return this.http.get<PaymentModel[]>(`${ServiceConfig.BASE_URL}${this.requests}/${recordId}/${this.entity}`);
  }
}
