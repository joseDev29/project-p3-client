import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCityComponent } from './city/create-city/create-city.component';
import { ListCityComponent } from './city/list-city/list-city.component';
import { UpdateCityComponent } from './city/update-city/update-city.component';
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
  {
    path:'city',
    component:ListCityComponent
  },
  {
    path:'city-creation',
    component:CreateCityComponent
  },
  {
    path:'city-edition/:id',
    component:UpdateCityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
