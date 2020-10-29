import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggin: boolean = false;
  userrole: string = null;
  token: string = null;

  constructor(private http: HttpClient) { }

  registerStudent(body){
    return this.http.post(environment.apiurl +'/register' , body ,{
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }
  loginStudent(body){
    return this.http.post(environment.apiurl +'/login' , body ,{
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  logout(){
    return this.http.get(environment.apiurl +'/logout',{
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  isAuthentiated():any{
    return this.http.get(environment.apiurl +'/user',{
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }
}
