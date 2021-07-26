import { CityModel } from '../parameters/city.model';

export interface UserModel {
  id?: string;
  name: string;
  lastname: string;
  document: number;
  phone: string;
  email: string;
  password?: string;
  role: number;
  cityId: string;
  city?: CityModel;
}
