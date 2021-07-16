import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { RequestModel } from 'src/app/models/request/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  entity: String = 'requests';
  constructor(private http: HttpClient) { 
    
  }
  getAllRecords(): Observable<RequestModel[]> {
    const filter: String =
      '{"fields":{"id":true,"code":true,"status":true,"offer":true,"firstPayment":true,"totalPayment":true,"feePayment":true, "feeNumber":true,"clientId":true, "propertyId":true},"include":[{"relation":"client"},{"relation":"property","scope": {"include":[{"relation":"block","scope":{"include": [{"relation":"project"}]}}]}}]}';

    return this.http.get<RequestModel[]>(
      `${ServiceConfig.BASE_URL}${this.entity}`
    );
  }
}
