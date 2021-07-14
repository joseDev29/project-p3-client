import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { BlockModel } from 'src/app/models/project/block.model';
import { SecurityService } from '../../security.service';

@Injectable({
  providedIn: 'root'
})
export class AdminBlockService {
entity:String='blocks';
projects='projects'
  constructor(
    private http: HttpClient,
    private securityService: SecurityService){
      //this.token = this.securityService.getToken()
    }
    getRecordById(recordId: String): Observable<BlockModel> {
      return this.http.get<BlockModel>(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`);
    }
    saveNewRecord(block: BlockModel): Observable<BlockModel> {
      return this.http.post<BlockModel>(`${ServiceConfig.BASE_URL}${this.entity}`,block);
    }
    editRecordById(block: BlockModel): Observable<BlockModel> { 
      return this.http.patch<BlockModel>(`${ServiceConfig.BASE_URL}${this.entity}/${block.id}`,block);
    }
    getBlocksByProjectId(recordId: String): Observable<BlockModel[]> {
      return this.http.get<BlockModel[]>(`${ServiceConfig.BASE_URL}${this.projects}/${recordId}/${this.entity}`);
    }
}
