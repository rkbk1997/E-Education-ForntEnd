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
        if (authenticated.status) {
          this.auth.isloggin = true;
          this.auth.userrole = authenticated.body.role;
          if(authenticated.body.role === 'admin'){
            this.auth.admin = true;
            // this.auth.userrole = res.username;

          }
          this.auth.userrole = authenticated.username;
          authflag.next(true);
        }
      },
      (err) => this.router.navigate(['/login'])
    );
    return authflag;
  }
}
