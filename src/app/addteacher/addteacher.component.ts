import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import {Teacher} from '../teacher'
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent  {

  private teacher: Teacher;
  constructor(private service: TeacherService, private router: Router) {
    this.teacher = new Teacher();
  }

  createTeacher() {
    this.service.createTeacher(this.teacher).subscribe(data => {
      this.teacher = new Teacher();
      this.router.navigate(['/teacherList'])
    })
 
  
}
}
