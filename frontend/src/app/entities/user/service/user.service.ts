import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from '../model/user.model';


const baseUrl = 'http://localhost:3000/usuario'

const TOKEN_KEY = 'auth-token'
const USER_KEY = 'auth-user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  login(data: User): Observable<any> {
    return this.http.post(baseUrl + "/login", data );
  }

  create(data: User): Observable<User> {
    return this.http.post<User>(baseUrl, data);
  }
}
