import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject'
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';
import { SubjectlistComponent } from '../subjectlist/subjectlist.component';

@Component({
  selector: 'app-subjectbyid',
  templateUrl: './subjectbyid.component.html',
  styleUrls: ['./subjectbyid.component.css']
})
export class SubjectbyidComponent {

  subject: Subject;
  id: number;
  constructor(private service: SubjectService, private router: Router) { }
  getSubjectById() {
    this.service.getSubjectById(this.id).subscribe(data => {
         this.subject = data;
         });

     }

}