import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  usernameerr: boolean = false;
  passworderr: boolean = false;
  emailerr: boolean = false;

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onfocus(){
    this.usernameerr = false
    this.passworderr = false
    this.emailerr = false
  }

  onSubmit(value){
    console.log(value)
    this.auth.loginStudent(value).subscribe(
      res =>{
        if(res['username']){
          this.usernameerr = true
        }else if(res['password']){
          this.passworderr = true
        }else if(res['email']){
          this.emailerr = true
        }
        else{
          this.auth.isloggin = true;
          this.auth.userrole = res['userrole']
          this.router.navigate(['/'])
          console.log(res)
        }
      }
    )
  }
}
