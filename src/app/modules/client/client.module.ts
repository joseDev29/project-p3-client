import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientComponent } from './admin/create-client/create-client.component';
import { UpdateClientComponent } from './admin/update-client/update-client.component';
import { ListClientComponent } from './admin/list-client/list-client.component';
import { CreateFinancesComponent } from './finances/create-finances/create-finances.component';
import { UpdateFinancesComponent } from './finances/update-finances/update-finances.component';
import { ListFinancesComponent } from './finances/list-finances/list-finances.component';



@NgModule({
  declarations: [
    CreateClientComponent,
    UpdateClientComponent,
    ListClientComponent,
    CreateFinancesComponent,
    UpdateFinancesComponent,
    ListFinancesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
