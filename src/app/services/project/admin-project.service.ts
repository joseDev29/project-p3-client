import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { BlockModel } from 'src/app/models/project/block.model';
import { ProjectModel } from 'src/app/models/project/project.model';
import { PropertyModel } from 'src/app/models/project/property.model';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})

export class AdminProjectService {
private entity='projects'
private city='cities'
  constructor(
    private http: HttpClient,
    private securityService: SecurityService){
      //this.token = this.securityService.getToken()
    }
    getProjectsByCityId(recordId: String): Observable<ProjectModel[]> {
      return this.http.get<ProjectModel[]>(`${ServiceConfig.BASE_URL}${this.city}/${recordId}/${this.entity}`);
    }
    getRecordById(recordId: String): Observable<ProjectModel> {
      return this.http.get<ProjectModel>(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`);
    }
    editRecordById(formData:FormData): Observable<any> { 
      return this.http.patch<any>(`${ServiceConfig.BASE_URL}${this.entity}/${formData.get('id')}`,formData);
    }
    saveNewRecord(request:any){
      return this.http.post<any>(`${ServiceConfig.BASE_URL}${this.entity}`, request)
    }
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
}