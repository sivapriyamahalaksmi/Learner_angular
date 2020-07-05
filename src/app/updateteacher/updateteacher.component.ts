import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateteacher',
  templateUrl: './updateteacher.component.html',
  styleUrls: ['./updateteacher.component.css']
})
export class UpdateteacherComponent  {

  private teacher: Teacher;
  constructor(private service: TeacherService, private router: Router) {
    this.teacher = new Teacher();
  }

  updateTeacher() {
    this.service.updateTeacher(this.teacher).subscribe(data => {
      this.teacher = new Teacher();
      this.router.navigate(['/teacherList'])
    })

}
}
