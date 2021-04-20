import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceConfig } from 'src/app/config/service-config';
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/models/project/project.model';

@Injectable({
  providedIn: 'root'
})

export class PublicProjectService {
  entity: String = 'projects';
  filter: String = '{"fields":{"code": true,"name": true,"description": true,"image": true,"cityId": true},"include":[{"relation": "city","scope": {"include":[{"relation": "country"}]}}]}'

  constructor(private http: HttpClient) {
  }

  getAllRecords(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(`${ServiceConfig.BASE_URL}${this.entity}${this.filter}`);
  }

}
