import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi:string = 'https://rickandmortyapi.com/api/character/';

  constructor( private http: HttpClient ) { }


  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public getDataFilter(search:string): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/?name=${search}`);
  }



}
