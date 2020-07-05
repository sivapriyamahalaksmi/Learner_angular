import { Component, OnInit } from '@angular/core';
import { ClassPOJOService } from '../class-pojo.service';
import { ClassPOJO } from '../class-pojo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteclass',
  templateUrl: './deleteclass.component.html',
  styleUrls: ['./deleteclass.component.css']
})
export class DeleteclassComponent  {
  class: ClassPOJO;
  id: number;
  constructor(private service: ClassPOJOService, private router: Router) { }
  deleteClassById() {
    this.service.deleteClassById(this.id).subscribe(data => {
         this.class = data;
         this.router.navigate(['/classList']);

   });

     }


}
