import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.less'],
})
export class AddcourseComponent implements OnInit {
  displayedColumns: string[] = [
    'Course Title',
    'Course Durations',
    'Course Fee',
    'Course Image',
    'Edit',
    'Delete',
  ];
  ELEMENT_DATA = [
    {
      'Course Title': 'C',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/c.jpg',
    },
    {
      'Course Title': 'CSS',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/css.png',
    },
    {
      'Course Title': 'C',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/c.jpg',
    },
    {
      'Course Title': 'CSS',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/css.png',
    },
    {
      'Course Title': 'C',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/c.jpg',
    },
    {
      'Course Title': 'CSS',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/css.png',
    },
    {
      'Course Title': 'C',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/c.jpg',
    },
    {
      'Course Title': 'CSS',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/css.png',
    },
    {
      'Course Title': 'C',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/c.jpg',
    },
    {
      'Course Title': 'CSS',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/css.png',
    },
    {
      'Course Title': 'C',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/c.jpg',
    },
    {
      'Course Title': 'CSS',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/css.png',
    },
  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('form') from: NgForm;

  pic;
  syllabus;

  constructor(private adminService: AdminserviceService ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): any{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string): any{
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  logData(row): any{
    console.log(row);
  }

  selectimage(e): any{
    this.pic = e.target.files[0];
  }
  selectsyllabus(e): any{
    this.syllabus = e.target.files[0];
  }

  addCourse(value): any{
    const { courseTitle, courseDurations, courseFee } = value;
    console.log(courseTitle, courseDurations, courseFee, this.pic, this.syllabus);
    const fd = new FormData();
    fd.append('courseTitle1', courseTitle);
    fd.append('courseDurations1', courseDurations);
    fd.append('courseFee1', courseFee);
    fd.append('pic1', this.pic);
    fd.append('syllabus1', this.syllabus);
    console.log('fd==', fd.getAll('courseTitle1'));
    this.adminService.addcourse(fd).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    this.from.reset('');
  }
}
