import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url: string;

  constructor(private http: HttpClient) {

    this.url = "http://localhost:8080/learneracademy_curd_rest_Api/student";
  }

  public getAllStudent():Observable<Student[]>{
    return this.http.get<Student[]>(this.url);
  }
  public createStudent(student:Student){
    return this.http.post<Student>(this.url,student);
  }
  public updateStudent(student:Student){
    return this.http.patch<Student>(this.url,student);
    }

    public getStudentById(id:number):Observable<Student>{
           return this.http.get<Student>(this.url+"/"+id);
     }

     public deleteStudentById(id:number):Observable<Student>{
      return this.http.delete<Student>(this.url+"/"+id);
}
}
