import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCountryComponent } from './country/create-country/create-country.component';
import { ListCountryComponent } from './country/list-country/list-country.component';
import { UpdateCountryComponent } from './country/update-country/update-country.component';

const routes: Routes = [
  {
    path:'country',
    component:ListCountryComponent
  },
  {
    path:'country-creation',
    component:CreateCountryComponent
  },
  {
    path:'country-edition/:id',
    component:UpdateCountryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
