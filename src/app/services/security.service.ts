import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/security/user.model';
import { ServiceConfig } from 'src/app/config/service-config';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  userData = new BehaviorSubject<UserModel>(new UserModel());

  constructor(private http: HttpClient) {
    this.verifyActiveSession();
   }

  /**
   * 
   * @param model posting user model
   * @returns 
   */
  loginUser(model: UserModel): Observable<UserModel> {
    console.log(model);
    
    return this.http.post<UserModel>(`${ServiceConfig.BASE_URL}login`, model, {
      headers: new HttpHeaders({})
    })
  }
  /**
   * verify if the session is active and setting user data
   */
  verifyActiveSession() {
    let currentSession = this.getSession();
    if (currentSession) {
      let userData = JSON.parse(currentSession);
      this.setUserData(userData);
    }
  }

  /**
   * 
   * @param value setting user data
   */
  setUserData(value: UserModel) {
    this.userData.next(value);
  }
resetPassword(model:UserModel):Observable<UserModel>{
  return this.http.post<UserModel>(`${ServiceConfig.BASE_URL}reset-password`, model, {
    headers: new HttpHeaders({})
  })
}
  /**
   * 
   * @returns user data
   */
  getUserData() {
    return this.userData.asObservable();
  }



  saveSession(sessionData: any): Boolean {
    if (this.getSession()) {
      console.log("Already session exists");
      return false;
    } else {
      console.log(sessionData);
      
      sessionData.isLogged=true;
      let data:UserModel={
        id: sessionData.id,
        username:sessionData.username,
        token:sessionData.token,
        isLogged:sessionData.isLogged,
        role:sessionData.role
      };
      localStorage.setItem('session',JSON.stringify(data));
      this.setUserData(data);
      return true;
    }
  }



  /**
   * 
   * @returns current data session
   */
  getSession() {
    return localStorage.getItem('session');
  }

  sessionExists(): Boolean {
    return (this.getSession()) ? true : false;
  }


logout(){
  localStorage.removeItem('session');
  this.setUserData(new UserModel());
}

getToken(): String {
  let currentSession = this.getSession();
  return JSON.parse(currentSession).token;
}
}
