import { Component, OnInit } from '@angular/core';
import{Subject}from '../subject'
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectlistComponent implements OnInit {

subjects:Subject[];

  constructor(private service:SubjectService) { }

  ngOnInit() {

    this.service.getAllSubject().subscribe(data=>{
      
      this.subjects=data;
     
    });
  }

}
