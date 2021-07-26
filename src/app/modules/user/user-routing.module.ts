import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHomeProjectComponent } from '../project/list-home-project/list-home-project.component';
import { LoginComponent } from '../security/login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: '**',
    component: ListHomeProjectComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
