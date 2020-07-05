import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent  {

  private student: Student;
  constructor(private service: StudentService, private router: Router) {
    this.student = new Student();
  }

  updateStudent() {
    this.service.updateStudent(this.student).subscribe(data => {
      this.student = new Student();
      this.router.navigate(['/studentList'])
    })

}
}
