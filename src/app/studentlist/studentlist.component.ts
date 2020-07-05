import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students:Student[];
  
  constructor(private service:StudentService) { }

  ngOnInit() {

    this.service.getAllStudent().subscribe(data=>{
      
   this.students=data;  
  });

}

}
