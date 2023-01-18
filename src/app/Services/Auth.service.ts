import { HttpClient } from '@angular/common/http';
import { AlertifyService } from './alertify.service';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  user:boolean;
  private _baseURL = 'http://localhost:3000/';
  // userName:any;
  // redirectUrl!: string;
  get isLoggedIn() {
    // debugger
  let x =localStorage.getItem('token')
    return x;
  }
constructor(private userService:UserService, private alertify:AlertifyService, private _http: HttpClient) { 
}
ngOnInit(): void {

}

login(email: string, password: string): Observable<Array<Object>> {
  return this._http.get<Array<Object>>(
    this._baseURL + `users?email=${email}&password=${password}`
  );
}
 
  
   
  
logout(): void {
  localStorage.setItem('token', 'false')
  this.alertify.success('logged out Successfully');
}
}
