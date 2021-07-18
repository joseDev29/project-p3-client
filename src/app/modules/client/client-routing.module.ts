import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './admin/client-page/client-page.component';
import { CreateClientComponent } from './admin/create-client/create-client.component';
import { ListClientComponent } from './admin/list-client/list-client.component';

const routes: Routes = [
  {
    path: '',
    component: ListClientComponent,
  },
  {
    path: 'creation',
    component: CreateClientComponent,
  },
  {
    path: "view/:id",
    component: ClientPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
