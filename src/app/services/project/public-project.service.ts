import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceConfig } from 'src/app/config/service-config';
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/models/project/project.model';
import { BlockModel } from '../../models/project/block.model';
import { PropertyModel } from '../../models/project/property.model';
import { PublicClientRequestModel } from 'src/app/models/project/public-client-request.model';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { CityModel } from 'src/app/models/parameters/city.model';

@Injectable({
  providedIn: 'root',
})
export class PublicProjectService {
  entity: String = 'projects';

  constructor(private http: HttpClient) {}

  getAllRecords(): Observable<ProjectModel[]> {
    const filter: String =
      '{"fields":{"id":true,"code":true,"name":true,"description":true,"image":true,"cityId":true},"include":[{"relation":"city","scope":{"include":[{"relation":"country"}]}}]}';

    return this.http.get<ProjectModel[]>(
      `${ServiceConfig.BASE_URL}${this.entity}?filter=${filter}`
    );
  }

  getProjectById(id: string): Observable<ProjectModel> {
    const filter: String =
      '{"fields":{"id":true,"code":true,"name":true,"description":true,"image":true,"cityId":true},"include":[{"relation":"city","scope":{"include":[{"relation":"country"}]}}]}';

    return this.http.get<ProjectModel>(
      `${ServiceConfig.BASE_URL}${this.entity}/${id}?filter=${filter}`
    );
  }

  getProjectsByCityId(cityId) {
    const filter: String = `{"where": {"cityId":"${cityId}"},"fields":{"id":true,"code":true,"name":true,"description":true,"image":true,"cityId":true},"include":[{"relation":"city","scope":{"include":[{"relation":"country"}]}}]}`;
    return this.http.get<ProjectModel[]>(
      `${ServiceConfig.BASE_URL}projects?filter=${filter}`
    );
  }

  getBlocksByProjectId(id: string): Observable<BlockModel[]> {
    return this.http.get<BlockModel[]>(
      `${ServiceConfig.BASE_URL}${this.entity}/${id}/blocks`
    );
  }

  getPropertiesByBlockId(id: string): Observable<PropertyModel[]> {
    return this.http.get<PropertyModel[]>(
      `${ServiceConfig.BASE_URL}blocks/${id}/properties`
    );
  }

  getPropertyById(propertyId: string) {
    return this.http.get<PropertyModel>(
      `${ServiceConfig.BASE_URL}properties/${propertyId}?filter={"fields":{"id":true,"code":true,"number":true,"description":true,"value":true,"status":true,"blockId":true},"include":[{"relation":"block","scope":{"include":[{"relation":"project"}]}}]}`
    );
  }

  sendPublicRequest(propertyId: string, data: PublicClientRequestModel) {
    return this.http.post<any>(
      `${ServiceConfig.BASE_URL}properties/${propertyId}/offer`,
      data
    );
  }

  getCountries(): Observable<CountryModel[]> {
    const filter: String = '{"fields":{"id":true,"code":true,"name":true}}';

    return this.http.get<CountryModel[]>(
      `${ServiceConfig.BASE_URL}countries?filter=${filter}`
    );
  }

  getCitiesByCountryId(countryId: String): Observable<CityModel[]> {
    return this.http.get<CityModel[]>(
      `${ServiceConfig.BASE_URL}countries/${countryId}/cities`
    );
  }
}
