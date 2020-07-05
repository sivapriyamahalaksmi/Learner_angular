import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteteacher',
  templateUrl: './deleteteacher.component.html',
  styleUrls: ['./deleteteacher.component.css']
})
export class DeleteteacherComponent  {

 
  teacher: Teacher;
  id: number;
  constructor(private service: TeacherService, private router: Router) { }
  deleteTeacherById() {
    this.service.deleteTeacherById(this.id).subscribe(data => {
         this.teacher = data;
         this.router.navigate(['/teacherList']);

   });

     }

}
