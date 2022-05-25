import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from '../model/user.model';


const baseUrl = 'http://localhost:3000/usuario'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  login(data: User): Observable<any> {
    return this.http.post(baseUrl + "/login", data );
  }

  create(data: User): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  saveProfile( id: string,img: string): Observable<any> {
    return this.http.put(baseUrl + "/" + id, {img})
  }
}
