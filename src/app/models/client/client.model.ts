import { CityModel } from '../parameters/city.model';

export interface ClientModel {
  id?: string;
  name: string;
  lastname: string;
  document: string;
  birthday: Date | string;
  image: string;
  image_public_id?: string;
  phone: number;
  email: string;
  adress: string;
  cityId: string;
  city?: CityModel;
}
