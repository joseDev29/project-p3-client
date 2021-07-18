import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientComponent } from './admin/create-client/create-client.component';
import { UpdateClientComponent } from './admin/update-client/update-client.component';
import { ListClientComponent } from './admin/list-client/list-client.component';
import { CreateFinancesComponent } from './finances/create-finances/create-finances.component';
import { UpdateFinancesComponent } from './finances/update-finances/update-finances.component';
import { ListFinancesComponent } from './finances/list-finances/list-finances.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClientRoutingModule } from './client-routing.module';
import { ClientPageComponent } from './admin/client-page/client-page.component';

@NgModule({
  declarations: [
    CreateClientComponent,
    UpdateClientComponent,
    ListClientComponent,
    CreateFinancesComponent,
    UpdateFinancesComponent,
    ListFinancesComponent,
    ClientPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    ClientRoutingModule,
  ],
})
export class ClientModule {}
