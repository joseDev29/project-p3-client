import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceConfig } from 'src/app/config/service-config';
import { ClientModel } from 'src/app/models/client/client.model';
import { FinancesModel } from 'src/app/models/client/finances.model';
import { RequestModel } from 'src/app/models/request/request.model';

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

  getRecordById(id: string) {
    return this.http.get<ClientModel>(
      `${ServiceConfig.BASE_URL}${this.entity}/${id}`
    );
  }

  getFinancesByClientId(clientId: string) {
    return this.http.get<FinancesModel>(
      `${ServiceConfig.BASE_URL}finances/${clientId}`
    );
  }

  getRequestsByClientId(clientId: string) {
    const filter: string =
      '{"where": {"clientId":"60792ff12d90f9255002dbda"},"fields": {"id": true,"code":true,"date": true,"status": true,"offer": true,"firstPayment": true,"totalPayment": true,"feePayment": true,"feeNumber": true,"propertyId": true,"clientId": true,"userId": true},"include":[{"relation":"property","scope": {"include":[{"relation":"block","scope":{"include":[{"relation":"project"}]}}]}}]}';

    return this.http.get<RequestModel[]>(
      `${ServiceConfig.BASE_URL}requests?filter=${filter}`
    );
  }
}
