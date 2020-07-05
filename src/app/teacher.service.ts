import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Teacher} from './teacher'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private url: string;

  constructor(private http: HttpClient) {

    this.url = "http://localhost:8080/learneracademy_curd_rest_Api/teacher";
  }

  public getAllTeacher():Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.url);
  }
  public createTeacher(teacher:Teacher){
    return this.http.post<Teacher>(this.url,teacher);
  }
  public updateTeacher(teacher:Teacher){
    return this.http.patch<Teacher>(this.url,teacher);
    }

    public getTeacherById(id:number):Observable<Teacher>{
           return this.http.get<Teacher>(this.url+"/"+id);
     }

     public deleteTeacherById(id:number):Observable<Teacher>{
      return this.http.delete<Teacher>(this.url+"/"+id);
}

}
