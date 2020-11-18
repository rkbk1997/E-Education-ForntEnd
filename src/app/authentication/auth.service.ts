import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggin = false;
  userrole: string = null;
  admin = false;
  user = false;
  token: string = null;

  constructor(private http: HttpClient) { }

  registerStudent(body): any{
    return this.http.post(environment.apiurl + '/register' , body , {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


  loginStudent(body): any{
    return this.http.post(environment.apiurl + '/login' , body , {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  logout(): any{
    return this.http.get(environment.apiurl + '/logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  isAuthentiated(): Observable<any>{
    return this.http.get(environment.apiurl + '/user', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
