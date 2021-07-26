import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { CreateRequestComponent } from './admin/create-request/create-request.component';
import { ListRequestComponent } from './admin/list-request/list-request.component';
import { UpdateRequestComponent } from './admin/update-request/update-request.component';
import { HomeListRequestComponent } from './home-list-request/home-list-request.component';
import { CreatePaymentComponent } from './payment/create-payment/create-payment.component';
import { UpdatePaymentComponent } from './payment/update-payment/update-payment.component';
import { ListPaymentComponent } from './payment/list-payment/list-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from '../charts/charts.module';

@NgModule({
  declarations: [
    CreateRequestComponent,
    ListRequestComponent,
    UpdateRequestComponent,
    HomeListRequestComponent,
    CreatePaymentComponent,
    UpdatePaymentComponent,
    ListPaymentComponent,
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
})
export class RequestModule {}
