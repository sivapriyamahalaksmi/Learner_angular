import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsubjectComponent } from './addsubject/addsubject.component';
import { UpdatesubjectComponent } from './updatesubject/updatesubject.component';
import { SubjectlistComponent } from './subjectlist/subjectlist.component';
import { SubjectbyidComponent } from './subjectbyid/subjectbyid.component';
import { DeletesubjectComponent } from './deletesubject/deletesubject.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { UpdateteacherComponent } from './updateteacher/updateteacher.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { TeacherbyidComponent } from './teacherbyid/teacherbyid.component';
import { DeleteteacherComponent } from './deleteteacher/deleteteacher.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentbyidComponent } from './studentbyid/studentbyid.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { AddclassComponent } from './addclass/addclass.component';
import { UpdateclassComponent } from './updateclass/updateclass.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { ClassbyidComponent } from './classbyid/classbyid.component';
import { DeleteclassComponent } from './deleteclass/deleteclass.component';


const routes: Routes = [  {path:"addSubject",component:AddsubjectComponent},
{path:"updateSubject",component:UpdatesubjectComponent},
{path:"subjectList",component:SubjectlistComponent},
{path:"subjectById",component:SubjectbyidComponent},
{path:"deleteSubject",component:DeletesubjectComponent},
{path:"addTeacher",component:AddteacherComponent},
{path:"updateTeacher",component:UpdateteacherComponent},
{path:"teacherList",component:TeacherlistComponent},
{path:"teacherById",component:TeacherbyidComponent},
{path:"deleteTeacher",component:DeleteteacherComponent},
{path:"addStudent",component:AddstudentComponent},
{path:"updateStudent",component:UpdatestudentComponent},
{path:"studentList",component:StudentlistComponent},
{path:"studentById",component:StudentbyidComponent},
{path:"deleteStudent",component:DeletestudentComponent},
{path:"addClass",component:AddclassComponent},
{path:"updateClass",component:UpdateclassComponent},
{path:"classList",component:ClasslistComponent},
{path:"classById",component:ClassbyidComponent},
{path:"deleteClass",component:DeleteclassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
