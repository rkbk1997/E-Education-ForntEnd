import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isAuthentiated().subscribe(
      res =>{
        if(res.status){
          this.auth.isloggin = true;
          this.auth.userrole = res.body.username;
          if(res.body.role === 'admin'){
            this.auth.admin = true
          }
        }
      }
    )
  }

}
