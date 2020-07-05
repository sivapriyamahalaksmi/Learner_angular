import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';
import { SubjectlistComponent } from './subjectlist/subjectlist.component';
import { DeletesubjectComponent } from './deletesubject/deletesubject.component';
import { UpdatesubjectComponent } from './updatesubject/updatesubject.component';
import { SubjectbyidComponent } from './subjectbyid/subjectbyid.component';
import { SubjectService } from './subject.service';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { DeleteteacherComponent } from './deleteteacher/deleteteacher.component';
import { TeacherbyidComponent } from './teacherbyid/teacherbyid.component';
import { UpdateteacherComponent } from './updateteacher/updateteacher.component'
import { TeacherService } from './teacher.service';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentbyidComponent } from './studentbyid/studentbyid.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { StudentService } from './student.service';
import { AddclassComponent } from './addclass/addclass.component';
import { UpdateclassComponent } from './updateclass/updateclass.component';
import { DeleteclassComponent } from './deleteclass/deleteclass.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { ClassbyidComponent } from './classbyid/classbyid.component';
import { ClassPOJOService } from './class-pojo.service';

@NgModule({
  declarations: [
    AppComponent,
    AddsubjectComponent,
    SubjectlistComponent,
    DeletesubjectComponent,
    UpdatesubjectComponent,
    SubjectbyidComponent,
    AddteacherComponent,
    TeacherlistComponent,
    DeleteteacherComponent,
    TeacherbyidComponent,
    UpdateteacherComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    StudentlistComponent,
    StudentbyidComponent,
    DeletestudentComponent,
    AddclassComponent,
    UpdateclassComponent,
    DeleteclassComponent,
    ClasslistComponent,
    ClassbyidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [SubjectService,TeacherService,StudentService,ClassPOJOService],
  bootstrap: [AppComponent]
})
export class AppModule { }
