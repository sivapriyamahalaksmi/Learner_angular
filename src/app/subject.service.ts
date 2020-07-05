import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private url: string;

  constructor(private http: HttpClient) {

    this.url = "http://localhost:8080/learneracademy_curd_rest_Api/subject";
  }

public getAllSubject():Observable<Subject[]>{
  return this.http.get<Subject[]>(this.url);
}

public createSubject(subject:Subject){
  return this.http.post<Subject>(this.url,subject);
}

public getSubjectById(id:number):Observable<Subject>{
 // return this.http.get<Subject>("http://localhost:8080/learneracademy_curd_rest_Api/subject/1");
  return this.http.get<Subject>(this.url+"/"+id);
}

public updateSubject(subject:Subject){
   return this.http.patch<Subject>(this.url,subject);
   }

   public deleteSubjectById(id:number):Observable<Subject>{
         return this.http.delete<Subject>(this.url+"/"+id);
}
}