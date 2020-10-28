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
}
