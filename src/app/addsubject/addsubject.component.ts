import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject'
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent  {

  private subject: Subject;
  constructor(private service: SubjectService, private router: Router) {
    this.subject = new Subject();
  }

  createSubject() {
    this.service.createSubject(this.subject).subscribe(data => {
      this.subject = new Subject();
      this.router.navigate(['/subjectList'])
    })

}

}