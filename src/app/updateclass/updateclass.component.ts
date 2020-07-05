import { Component, OnInit } from '@angular/core';
import { ClassPOJO } from '../class-pojo';
import { ClassPOJOService } from '../class-pojo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateclass',
  templateUrl: './updateclass.component.html',
  styleUrls: ['./updateclass.component.css']
})
export class UpdateclassComponent  {

  private class: ClassPOJO;
  constructor(private service: ClassPOJOService, private router: Router) {
    this.class = new ClassPOJO();
  }

  updateClass() {
    this.service.updateClass(this.class).subscribe(data => {
      this.class = new ClassPOJO();
      this.router.navigate(['/classList'])
    })

}

}
