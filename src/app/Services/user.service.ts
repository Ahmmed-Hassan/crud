import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = `http://localhost:3000/users`;
  constructor(private http:HttpClient ) { 

  }

checkUser(data:any):Observable<any>{
  return this.http.get(this.url+`?${data}`).pipe(shareReplay())
 }

}


