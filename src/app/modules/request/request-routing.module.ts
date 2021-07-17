import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateRequestComponent } from './admin/update-request/update-request.component';
import { HomeListRequestComponent } from './home-list-request/home-list-request.component';

const routes: Routes = [
  {
    path:'homelist',
    component:HomeListRequestComponent
  },
  {
    path:'list/:id',
    component:UpdateRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
