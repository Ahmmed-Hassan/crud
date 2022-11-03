import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, shareReplay } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url = `http://localhost:3000/employees`;
  constructor(private http:HttpClient ) { 

  }

getEmployees():Observable<any>{
  return this.http.get(this.url).pipe(shareReplay())
 }
 addEmployee(data:any){
  return this.http.post(this.url,data)
 }
 editEmployee(id:any,data:any){
  return this.http.put( this.url +`/${id}`,data).pipe(shareReplay())
 }
deleteEmployee(id:any){
  return this.http.delete(this.url +`/${id}`)
}
}
