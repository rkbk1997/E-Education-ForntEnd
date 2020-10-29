import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less'],
})
export class SignupComponent implements OnInit {
  phoneErr: string = '';
  passwordErr: string = '';
  successMessage: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

  checkValid(value){
    if ((`${value.phone}`).length < 10 || (`${value.phone}`).length > 10) {
      this.phoneErr = 'Max 10 Character Accpeted';
      return false;
    } else if (value.password !== value.password1) {
      this.passwordErr = 'Password does not matched';
      return false;
    } else {
      return true;
    }
  }

  onfocus(){
    this.passwordErr = '',
    this.phoneErr = ''
  }

  onSubmit(value): any {
    console.log(value)
    if(this.checkValid(value)){
    this.auth.registerStudent(value).subscribe(
      res => {
        if(res){
          this.successMessage = "Successfully Register";
          setTimeout(()=>{
            this.router.navigate(['/login'])
          },1000)
        }
        else{
          this.successMessage = "This User Already Register";
        }
        console.log(res)});
    }
  }
}
