import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PublicUserService } from '../public-user.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less'],
})
export class ContactComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  loader = false;

  constructor(private publicService: PublicUserService) {}

  ngOnInit(): void {}


  submitContact(value): any {
    console.log(value);
    this.loader = true;
    
    this.publicService.getContact(value).subscribe(
      (res) => {
          console.log(res);
          this.loader = !res;
          this.form.reset('');
          alert('Thanks For Your Query');
        },
        (err) => console.log(err)
        );
  }
}
