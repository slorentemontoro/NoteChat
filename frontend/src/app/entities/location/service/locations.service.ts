import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Centro } from '../model/location.model';

const baseUrl = "http://localhost:3000/centros"
@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  public getAllLocations(): Observable<Centro[]>{

    return this.http.get<Centro[]>(baseUrl);
  }

  public getOnlyMap(): Observable<any>{

    return this.http.get<any>(baseUrl);
  }
}
