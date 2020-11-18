import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.isloggin
  }
  logout(){
    this.auth.logout().subscribe(
      res => {
        console.log(res);
        this.auth.isloggin = false;
        this.auth.userrole = ""
        this.auth.admin = false;
        this.router.navigate(['/'])
      }
    )
  }

}
