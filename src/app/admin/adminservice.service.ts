import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  addcourse(body): any {
    // new HttpHeaders()
    console.log('In Service', JSON.stringify(body));
    return this.http.post(environment.apiurl + '/admin/course' , body,{
      withCredentials: true,
    });
  }
}
