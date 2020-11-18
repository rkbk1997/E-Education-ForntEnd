import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.less']
})
export class CourseCardComponent implements OnInit {
  @Input() course_title : string;
  @Input() duations: string;
  @Input() fee: string;
  @Input() img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
