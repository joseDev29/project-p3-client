import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { ProjectModel } from 'src/app/models/project/project.model';
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
    getProjectByCityId(recordId: String): Observable<ProjectModel[]> {
      return this.http.get<ProjectModel[]>(`${ServiceConfig.BASE_URL}${this.city}/${recordId}/${this.entity}`);
    }
}