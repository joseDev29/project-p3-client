import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCountryComponent } from './country/create-country/create-country.component';
import { UpdateCountryComponent } from './country/update-country/update-country.component';
import { ListCountryComponent } from './country/list-country/list-country.component';
import { CreateCityComponent } from './city/create-city/create-city.component';
import { UpdateCityComponent } from './city/update-city/update-city.component';
import { ListCityComponent } from './city/list-city/list-city.component';



@NgModule({
  declarations: [
    CreateCountryComponent,
    UpdateCountryComponent,
    ListCountryComponent,
    CreateCityComponent,
    UpdateCityComponent,
    ListCityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ParametersModule { }
