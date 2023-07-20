import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  //get all books by subject
getBooksList(search:string, offset?:number,limit?:number): Observable<any>{
  return this.http.get<any>(`${environment.BASE_URL}/subjects/${search}.json?offset=${offset}&limit=${limit}`);
}
//get book's description
getBookDescription(key:any): Observable<any>{
  return this.http.get<any>(`${environment.BASE_URL}${key}.json`)
}
}
