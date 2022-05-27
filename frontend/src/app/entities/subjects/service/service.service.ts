import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subjects } from '../model/subject.model';


const baseUrl = 'http://localhost:3000/asignaturas/'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  public getSubjectsOfOneGrade(id: string): Observable<Subjects[]>{

    return this.http.get<Subjects[]>(baseUrl + id);
  }
}
