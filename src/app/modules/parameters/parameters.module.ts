import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCityComponent } from './city/create-city/create-city.component';
import { UpdateCityComponent } from './city/update-city/update-city.component';
import { ListCityComponent } from './city/list-city/list-city.component';



@NgModule({
  declarations: [
    CreateCityComponent,
    UpdateCityComponent,
    ListCityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ParametersModule { }
