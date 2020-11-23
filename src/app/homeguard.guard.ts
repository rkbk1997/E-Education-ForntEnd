import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './authentication/auth.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeguardGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const authflag = new Subject<boolean>();
    this.auth.isAuthentiated().subscribe(
      (authenticated) => {
        if (authenticated.status) {
          this.auth.isloggin = true;
          this.auth.userrole = authenticated.body.username;
          if (authenticated.body.userrole === 'admin'){
            this.auth.admin = true;
          }
          authflag.next(true);
        }
        else{
          this.router.navigate(['/']);
        }
      },
      (err) => this.router.navigate(['/'])
    );
    return authflag;
  }
}

