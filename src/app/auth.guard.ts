import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot,Router,} from '@angular/router';
import { AttachSession } from 'protractor/built/driverProviders';
import { Observable, Subject } from 'rxjs';
import { AuthService } from './authentication/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let authflag = new Subject<boolean>();
    this.auth.isAuthentiated().subscribe(
      (authenticated) => {
        console.log(authenticated);
        if (authenticated.status) {
          this.auth.isloggin = true;
          this.auth.userrole = authenticated.body.userrole
          if(authenticated.body.role === 'admin'){
            this.auth.admin = true;
          }
          authflag.next(true);
        }
      },
      (err) => this.router.navigate(['/login'])
    );
    return authflag;
  }
}
