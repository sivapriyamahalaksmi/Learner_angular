import { Component, OnInit } from '@angular/core';
import { ClassPOJO } from '../class-pojo';
import { ClassPOJOService } from '../class-pojo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})
export class AddclassComponent  {

 
  private class: ClassPOJO;
  constructor(private service: ClassPOJOService, private router: Router) {
    this.class = new ClassPOJO();
  }

  createClass() {
    this.service.createClass(this.class).subscribe(data => {
      this.class = new ClassPOJO();
      this.router.navigate(['/classList'])
    })

}


}
