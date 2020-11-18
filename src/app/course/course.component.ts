import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {

  course =[
    {
      course_title: 'C Language',
      duration: '30 Hours',
      imgsrc : 'assets/images/c.jpg',
      fee : '2000',
    },
    {
      course_title: 'CSS3 ',
      duration: '30 Hours',
      imgsrc : 'assets/images/css.png',
      fee : '2000',
    },
    {
      course_title: 'HTML',
      duration: '30 Hours',
      imgsrc : 'assets/images/html.jpg',
      fee : '2000',
    },
    {
      course_title: 'HTML',
      duration: '30 Hours',
      imgsrc : 'assets/images/html.jpg',
      fee : '2000',
    },
    {
      course_title: 'HTML',
      duration: '30 Hours',
      imgsrc : 'assets/images/html.jpg',
      fee : '2000',
    },
    {
      course_title: 'C Language',
      duration: '30 Hours',
      imgsrc : 'assets/images/c.jpg',
      fee : '2000',
    },
    {
      course_title: 'CSS3 ',
      duration: '30 Hours',
      imgsrc : 'assets/images/css.png',
      fee : '2000',
    },
    {
      course_title: 'HTML',
      duration: '30 Hours',
      imgsrc : 'assets/images/html.jpg',
      fee : '2000',
    },
    {
      course_title: 'HTML',
      duration: '30 Hours',
      imgsrc : 'assets/images/html.jpg',
      fee : '2000',
    },
    {
      course_title: 'HTML',
      duration: '30 Hours',
      imgsrc : 'assets/images/html.jpg',
      fee : '2000',
    }

  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
