import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentbyid',
  templateUrl: './studentbyid.component.html',
  styleUrls: ['./studentbyid.component.css']
})
export class StudentbyidComponent  {
  student: Student;
  id: number;
  constructor(private service: StudentService, private router: Router) { }
  getStudentById() {
    this.service.getStudentById(this.id).subscribe(data => {
         this.student = data;
         });

     }


}
