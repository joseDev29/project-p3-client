import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { CityModel } from 'src/app/models/parameters/city.model';
import { CityCountryModel } from 'src/app/models/parameters/cityCountry.model';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  entity: String = 'cities';
  token: String;
  constructor(
    private http: HttpClient,
    private securityService: SecurityService,
    ) { 
      //this.token = this.securityService.getToken()
    }


    getRecordById(recordId: String): Observable<CityCountryModel> {
      return this.http.get<CityCountryModel>(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`);
    }

    editRecordById(record: CityModel): Observable<CityModel> {
      return this.http.put<CityModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id}`, record, {
        /*headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
        */
      });
    }

    getAllRecords(): Observable<CityCountryModel[]> {
      const filter: String =
        '{"fields":{"id":true,"code":true,"name":true,"countryId":true},"include":[{"relation":"country"}]}';
  
      return this.http.get<CityCountryModel[]>(
        `${ServiceConfig.BASE_URL}${this.entity}?filter=${filter}`
      );
    }
  saveNewCity(country: CityModel): Observable<CityModel> {
    return this.http.post<CityModel>(`${ServiceConfig.BASE_URL}${this.entity}`, country, {
      /*headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })*/
    });
  }
}