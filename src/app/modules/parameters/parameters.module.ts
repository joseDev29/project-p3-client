import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
import { CreateCityComponent } from './city/create-city/create-city.component';
import { UpdateCityComponent } from './city/update-city/update-city.component';
import { ListCityComponent } from './city/list-city/list-city.component';
>>>>>>> d9e5f77d4e4b2ece64e2955c4f4343835b980576
import { CreateCountryComponent } from './country/create-country/create-country.component';
import { ListCountryComponent } from './country/list-country/list-country.component';
<<<<<<< HEAD
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
=======
import { UpdateCountryComponent } from './country/update-country/update-country.component';

@NgModule({
  declarations: [
    CreateCityComponent,
    UpdateCityComponent,
    ListCityComponent,
    CreateCountryComponent,
    UpdateCountryComponent,
    ListCountryComponent,
>>>>>>> d9e5f77d4e4b2ece64e2955c4f4343835b980576
  ],
  imports: [CommonModule],
})
export class ParametersModule {}
