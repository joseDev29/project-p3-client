import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceConfig } from 'src/app/config/service-config';
import { ClientModel } from 'src/app/models/client/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private entity: string = 'clients';

  constructor(private http: HttpClient) {}

  getAllRecords() {
    return this.http.get<ClientModel[]>(
      `${ServiceConfig.BASE_URL}${this.entity}`
    );
  }

  saveNewRecord(client: FormData) {
    return this.http.post<any>(
      `${ServiceConfig.BASE_URL}${this.entity}`,
      client
    );
  }
}
