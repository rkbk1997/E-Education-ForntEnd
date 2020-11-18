import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  constructor() { }

  news = [
    {
      img1: 'assets/images/c.jpg',
      course_title: 'C Language',
      new_detail: 'We Stared a New Program For C Language',
      started_date: '17/11/2020'
    },
    {
      img1: 'assets/images/c.jpg',
      course_title: 'C Language',
      new_detail: 'We Stared a New Program For C Language',
      started_date: '17/11/2020'
    },
    {
      img1: 'assets/images/css.png',
      course_title: 'CSS3',
      new_detail: 'We Stared a New Program For Classes For CSS',
      started_date: '17/11/2020'
    }
  ]


  ngOnInit(): void {
  }

}
