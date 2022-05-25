import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Profile } from '../model/profile.model';
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

  create(data: User): Observable<any> {
    return this.http.post(baseUrl, data);
  }

<<<<<<< HEAD
  saveProfile(img: String, id: number): Observable<any> {
    console.log()
=======
  saveProfile(img: string, id: number): Observable<any> {
    console.log(baseUrl + "/" + id)
>>>>>>> f0f69d63de830bb206b225719bf7c9935931b173
    return this.http.put(baseUrl + "/" + id, img)
  }
}
