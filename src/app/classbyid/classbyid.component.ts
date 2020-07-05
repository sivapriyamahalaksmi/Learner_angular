import { Component, OnInit } from '@angular/core';
import { ClassPOJO } from '../class-pojo';
import { ClassPOJOService } from '../class-pojo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classbyid',
  templateUrl: './classbyid.component.html',
  styleUrls: ['./classbyid.component.css']
})
export class ClassbyidComponent  {
  class: ClassPOJO;
  id: number;
  constructor(private service: ClassPOJOService, private router: Router) { }
  getClassById() {
    this.service.getClassById(this.id).subscribe(data => {
         this.class = data;
         });

     }

}
