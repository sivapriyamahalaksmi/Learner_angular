import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject'
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-updatesubject',
  templateUrl: './updatesubject.component.html',
  styleUrls: ['./updatesubject.component.css']
})
export class UpdatesubjectComponent  {

   private subject: Subject;
  constructor(private service: SubjectService, private router: Router) {
    this.subject = new Subject();
  }

  updateSubject() {
    this.service.updateSubject(this.subject).subscribe(data => {
      this.subject = new Subject();
      this.router.navigate(['/subjectList'])
    })

}
}
