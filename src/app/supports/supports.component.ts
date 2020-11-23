import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PublicUserService } from '../public-user.service';
@Component({
  selector: 'app-supports',
  templateUrl: './supports.component.html',
  styleUrls: ['./supports.component.less'],
})
export class SupportsComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  loader = false;

  constructor(private publicService: PublicUserService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  submitSupport(value): any {
    this.loader = true;
    setTimeout(() => {
      console.log(value);
      this.publicService.getSupport(value).subscribe((res) => console.log(res));
      this.loader = false;
      this.form.reset('');
    }, 2000);
  }
}
