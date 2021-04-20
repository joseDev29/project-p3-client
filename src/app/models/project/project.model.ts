import {CityCountryModel} from 'src/app/models/parameters/cityCountry.model';

export interface ProjectModel{
    id?: String;
    code: String;
    name: String;
    description: String;
    image: String;
    id_city:String;
    city:CityCountryModel;
}