import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  entity: String = 'countries';
  token: String;
  constructor(
    private http: HttpClient,
    private securityService: SecurityService,
    ) { 
      //this.token = this.securityService.getToken()
    }


    getRecordById(recordId: String): Observable<CountryModel> {
      return this.http.get<CountryModel>(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`);
    }

    editRecordById(record: CountryModel): Observable<CountryModel> {
      return this.http.put<CountryModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id}`, record, {
        /*headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
        */
      });
    }

    getAllRecords(): Observable<CountryModel[]> {
      const filter: String =
        '{"fields":{"id":true,"code":true,"name":true}}';
  
      return this.http.get<CountryModel[]>(
        `${ServiceConfig.BASE_URL}${this.entity}?filter=${filter}`
      );
    }
  saveNewCountry(country: CountryModel): Observable<CountryModel> {
    return this.http.post<CountryModel>(`${ServiceConfig.BASE_URL}${this.entity}`, country, {
      /*headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })*/
    });
  }
}
