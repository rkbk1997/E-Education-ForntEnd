import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.less']
})
export class NewsCardComponent implements OnInit {
  @Input() img: string;
  @Input() course_title: string;
  @Input() new_detail: string;
  @Input() started_date: string;

  constructor() { }

  ngOnInit(): void {
  }

}
