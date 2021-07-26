import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedBothGuard } from 'src/app/guards/authenticated-both.guard';
import { AuthenticatedUserGuard } from 'src/app/guards/authenticated-user.guard';
import { CreateRequestComponent } from './admin/create-request/create-request.component';
import { UpdateRequestComponent } from './admin/update-request/update-request.component';
import { HomeListRequestComponent } from './home-list-request/home-list-request.component';
import { CreatePaymentComponent } from './payment/create-payment/create-payment.component';

const routes: Routes = [
  {
    path:'',
    component:HomeListRequestComponent,
    canActivate:[AuthenticatedBothGuard]
  },
  {
    path:'view/:id',
    component:UpdateRequestComponent,
    canActivate:[AuthenticatedBothGuard]
  },
  {
    path:'view/:id/payment',
    component:CreatePaymentComponent,
    canActivate:[AuthenticatedUserGuard]
  },
  {
    path:'create',
    component:CreateRequestComponent,
    canActivate:[AuthenticatedUserGuard]
    
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
