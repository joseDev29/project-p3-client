import {CityCountryModel} from 'src/app/models/parameters/cityCountry.model';

export interface ProjectModel{
    id?: string;
    code: string;
    name: string;
    description: string;
    image: string;
    id_city:string;
    city:CityCountryModel;
}