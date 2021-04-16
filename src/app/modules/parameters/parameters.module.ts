import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCountryComponent } from './country/create-country/create-country.component';
import { UpdateCountryComponent } from './country/update-country/update-country.component';
import { ListCountryComponent } from './country/list-country/list-country.component';



@NgModule({
  declarations: [
    CreateCountryComponent,
    UpdateCountryComponent,
    ListCountryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ParametersModule { }
