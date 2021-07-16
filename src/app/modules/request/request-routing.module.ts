import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeListRequestComponent } from './home-list-request/home-list-request.component';

const routes: Routes = [
  {
    path:'homelist',
    component:HomeListRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
