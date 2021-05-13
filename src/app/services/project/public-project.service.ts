import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceConfig } from 'src/app/config/service-config';
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/models/project/project.model';
import { BlockModel } from '../../models/project/block.model';
import { PropertyModel } from '../../models/project/property.model';

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
