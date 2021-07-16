import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { PropertyModel } from 'src/app/models/project/property.model';
import { SecurityService } from 'src/app/services/security.service';

@Injectable({
  providedIn: 'root'
})
export class AdminPropertyService {
  entity:String='properties';
  constructor(
    private http: HttpClient,
    private securityService: SecurityService
  ) {
    //this.token = this.securityService.getToken()
  }
  getRecordById(recordId: String): Observable<PropertyModel> {
    return this.http.get<PropertyModel>(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`);
  }
  saveNewRecord(property: PropertyModel): Observable<PropertyModel> {
    console.log(`${ServiceConfig.BASE_URL}${this.entity}`);
    
    return this.http.post<PropertyModel>(`${ServiceConfig.BASE_URL}${this.entity}`, property);
  }
}