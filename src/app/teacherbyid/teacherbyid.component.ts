import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherbyid',
  templateUrl: './teacherbyid.component.html',
  styleUrls: ['./teacherbyid.component.css']
})
export class TeacherbyidComponent  {
  teacher: Teacher;
  id: number;
  constructor(private service: TeacherService, private router: Router) { }
  getTeacherById() {
    this.service.getTeacherById(this.id).subscribe(data => {
         this.teacher = data;
         });

     }

}
