import { Component, OnInit } from '@angular/core';
import { ClassPOJO } from '../class-pojo';
import { ClassPOJOService } from '../class-pojo.service';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {
  classes:ClassPOJO[];
  
  constructor(private service:ClassPOJOService) { }

  ngOnInit() {

    this.service.getAllClass().subscribe(data=>{
      
   this.classes=data;  
  });

}}
