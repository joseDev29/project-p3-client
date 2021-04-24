export class UserModel{
    id?: String;
    username: String;
    password?: String;
    role?: Number;
    isLogged: Boolean = false;
    token?: String;
}