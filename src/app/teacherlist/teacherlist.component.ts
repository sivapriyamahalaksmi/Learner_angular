import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { JsonPipe } from '@angular/common';




@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {

 teachers:Teacher[];
  
  constructor(private service:TeacherService) { }

  ngOnInit() {

    this.service.getAllTeacher().subscribe(data=>{
      
   this.teachers=data;  
    
     // console.log(this.teachers[0].subject) ;
      
      let res=JSON.stringify(data);
      console.log(res);
      // this.teachers=res;
      // document.getElementById(res);
      


    });

  }

}
