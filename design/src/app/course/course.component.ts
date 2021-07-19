import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
mission = [
  {'id': 1, 'name':'Stocks and scares','description': 'lester to win', 'image': '../../assets/mission 1.jpg'},
  {'id': 2, 'name':'Prologue','description': 'no mercy', 'image': '../../assets/mission 2.jpg'},

]

}