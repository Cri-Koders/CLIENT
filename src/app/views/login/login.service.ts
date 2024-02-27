import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlBackend = 'http://localhost:blablabla'
  constructor( private http : HttpClient ) { }

  loginAccount ( user : any ) {
    return this.http.post(this.urlBackend, user)
  }
}
