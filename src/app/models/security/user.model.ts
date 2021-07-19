export class UserModel {
  id?: string;
  username: string;
  password?: string;
  role?: number;
  isLogged?: boolean = false;
  token?: string;
}
