import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent  {

 
  private student: Student;
  constructor(private service: StudentService, private router: Router) {
    this.student = new Student();
  }

  createStudent() {
    this.service.createStudent(this.student).subscribe(data => {
      this.student = new Student();
      this.router.navigate(['/studentList'])
    })

}

}
