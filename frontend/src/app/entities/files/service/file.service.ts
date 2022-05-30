import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from 'src/app/entities/files/model/file.model';
import { Files } from '../model/filePost.model';


const baseUrl = 'http://localhost:3000/archivos'

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  public getFilesOfSubject( idSubject: string): Observable<File[]>{
    return this.http.get<File[]>(baseUrl + "/" + idSubject);
  }


  public createFile( idUser: string, data: Files): Observable<Files>{
    return this.http.post<Files>(baseUrl + "/" + idUser, data)
  }
}
