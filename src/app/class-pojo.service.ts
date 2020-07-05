import { Injectable } from '@angular/core';
import { ClassPOJO } from './class-pojo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassPOJOService {
  private url: string;

  constructor(private http: HttpClient) {

    this.url = "http://localhost:8080/learneracademy_curd_rest_Api/class";
  }

  public getAllClass():Observable<ClassPOJO[]>{
    return this.http.get<ClassPOJO[]>(this.url);
  }
  public createClass(student:ClassPOJO){
    return this.http.post<ClassPOJO>(this.url,student);
  }
  public updateClass(student:ClassPOJO){
    return this.http.patch<ClassPOJO>(this.url,student);
    }

    public getClassById(id:number):Observable<ClassPOJO>{
           return this.http.get<ClassPOJO>(this.url+"/"+id);
     }

     public deleteClassById(id:number):Observable<ClassPOJO>{
      return this.http.delete<ClassPOJO>(this.url+"/"+id);
}
}
