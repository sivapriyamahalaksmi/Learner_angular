import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject'
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';
import { SubjectlistComponent } from '../subjectlist/subjectlist.component';

@Component({
  selector: 'app-deletesubject',
  templateUrl: './deletesubject.component.html',
  styleUrls: ['./deletesubject.component.css']
})
export class DeletesubjectComponent  {

 
  subject: Subject;
  id: number;
  constructor(private service: SubjectService, private router: Router) { }
  deleteSubjectById() {
    this.service.deleteSubjectById(this.id).subscribe(data => {
         this.subject = data;
         this.router.navigate(['/subjectList']);

   });

     }


}
