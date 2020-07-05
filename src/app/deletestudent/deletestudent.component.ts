import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent  {

 
  student: Student;
  id: number;
  constructor(private service: StudentService, private router: Router) { }
  deleteStudentById() {
    this.service.deleteStudentById(this.id).subscribe(data => {
         this.student = data;
         this.router.navigate(['/studentList']);

   });

     }


}
