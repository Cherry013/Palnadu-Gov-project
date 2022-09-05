import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-roll-number',
  templateUrl: './student-roll-number.component.html',
  styleUrls: ['./student-roll-number.component.css']
})
export class StudentRollNumberComponent implements OnInit {
  allStudents : any;
  student: any;
  StudentObject: any;
  Displaymarks:boolean= false;

  constructor(private studentService: StudentServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  // Getmarks(){
  //   console.log('Getmarks')
  // }

  // getMarksOfAllStudents() {
  //   this.studentService.getAllStudents()
  //                      .subscribe(data => {
  //                       if(data) {
  //                           this.allStudents = data;
  //                           console.log("allStudents = " ,this.allStudents);

  //                       } else {
  //                         console.log('getMarksOfAllStudents() got no data!');
  //                       }
  //                      }, err => {
  //                       console.log('getMarksOfAllStudents() failed to fetch the data!');
  //                      }
  //                      )
  // }

  getMarksOfAStudent(rollno: string) {
    this.studentService.getStudent(rollno)
                        .subscribe((data) => {
                          if (data) {
                            this.student = data;
                            this.StudentObject=this.student[0]
                            this.Displaymarks = true;
                          } else {
                            console.log('getStudent() got no data!');
                          }
                        }, err => console.log('getStudent() failed to fetch the data!'));
  }

}
