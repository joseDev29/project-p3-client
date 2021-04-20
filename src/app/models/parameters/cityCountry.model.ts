import {CountryModel} from 'src/app/models/parameters/country.model'
import { CityModel } from './city.model';

export interface CityCountryModel extends CityModel{
   
    country: CountryModel;
  }