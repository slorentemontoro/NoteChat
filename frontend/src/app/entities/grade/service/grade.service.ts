import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grade } from '../model/grade.model';


const baseUrl = 'http://localhost:3000/grados'
@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http: HttpClient) { }

  public getAllGrades(): Observable<Grade[]>{

    return this.http.get<Grade[]>(baseUrl);
  }
}
