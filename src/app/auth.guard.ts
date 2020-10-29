import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './authentication/auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean>
   | Promise<boolean> | boolean {
    return this.auth.isAuthentiated()
    .then((authenticated: boolean) => {
      console.log('authentication====',authenticated)
      if(authenticated) 
      return true;
      else {
        this.router.navigate(['/']);
        return false;
  }
})
  
}}

