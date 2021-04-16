import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCityComponent } from './city/create-city/create-city.component';
import { UpdateCityComponent } from './city/update-city/update-city.component';
import { ListCityComponent } from './city/list-city/list-city.component';
import { CreateCountryComponent } from './country/create-country/create-country.component';
import { ListCountryComponent } from './country/list-country/list-country.component';
import { UpdateCountryComponent } from './country/update-country/update-country.component';

@NgModule({
  declarations: [
    CreateCityComponent,
    UpdateCityComponent,
    ListCityComponent,
    CreateCountryComponent,
    UpdateCountryComponent,
    ListCountryComponent,
  ],
  imports: [CommonModule],
})
export class ParametersModule {}
