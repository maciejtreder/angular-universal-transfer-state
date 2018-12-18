import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class CustomService {

 constructor(private http: HttpClient) {}

 public getFast(): Observable<any> {
   return this.http.get<any>('http://localhost:8081/api/fast');
 }

 public getSlow(): Observable<any> {
   return this.http.get<any>('http://localhost:8081/api/slow');
 }
}
