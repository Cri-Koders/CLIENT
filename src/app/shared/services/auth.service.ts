import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { LoginForm, RegisterForm } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected api = environment.API_URL;
  
  constructor(
    private readonly http: HttpClient,
  ) { }

  login(propsLogin: LoginForm){
    const body = propsLogin;
    return this.http.post(`${this.api}/user/login`,body);
  }

  register(propsRegister: RegisterForm){
    const body = propsRegister;
    return this.http.post(`${this.api}/user/sign`, body, {
      responseType: "text",
    });
  }

  facebookStrategyAuth(){
    return this.http.get<any>(`${this.api}/user/login/facebook`);
  }
  googleStrategyAuth(){
    return this.http.get<any>(`${this.api}/user/login/google`);
  }

}