import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';

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
      imgurl: 'assets/images/c.jpg'
    },
    {
      'Course Title': 'CSS',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/css.png'
    },
    {
      'Course Title': 'C',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/c.jpg'
    },
    {
      'Course Title': 'CSS',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/css.png'
    },
    {
      'Course Title': 'C',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/c.jpg'
    },
    {
      'Course Title': 'CSS',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/css.png'
    },
    {
      'Course Title': 'C',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/c.jpg'
    },
    {
      'Course Title': 'CSS',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/css.png'
    },
    {
      'Course Title': 'C',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/c.jpg'
    },
    {
      'Course Title': 'CSS',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/css.png'
    },
    {
      'Course Title': 'C',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/c.jpg'
    },
    {
      'Course Title': 'CSS',
      'Course Durations': '30 Days',
      'Course Fee': '2000',
      imgurl: 'assets/images/css.png'
    },
  ];


  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  logData(row){
    console.log(row)
  }
}
