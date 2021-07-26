import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceConfig } from 'src/app/config/service-config';
import { UserModel } from 'src/app/models/user/userCD.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private entity: string = 'users';
  constructor(private http: HttpClient) { }
  
  saveNewRecord(client: UserModel) {
    return this.http.post<any>(
      `${ServiceConfig.BASE_URL}${this.entity}`,
      client
    );
  }
}
