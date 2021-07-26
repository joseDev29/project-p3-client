import { CityModel } from '../parameters/city.model';

export interface UserModel {
  id?: string;
  name: string;
  lastname: string;
  document: string;
  phone: number;
  email: string;
  password?: string;
  role:number;
  cityId: string;
  city?: CityModel;
}