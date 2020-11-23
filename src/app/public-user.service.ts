import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicUserService {

  constructor( private http: HttpClient ) { }

  getContact(body): any{
    return this.http.post(environment.apiurl + '/publicuser' + '/contact' , body);
  }

  getSupport(body): any{
    return this.http.post(environment.apiurl + '/publicuser' + '/support' , body);
  }
}
