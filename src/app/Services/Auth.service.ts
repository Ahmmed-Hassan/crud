import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  user:boolean;
  // userName:any;
  // redirectUrl!: string;
  get isLoggedIn() {
    // debugger
  let x =sessionStorage.getItem('user')
    return x;
  }
constructor(private userService:UserService) { 
}
ngOnInit(): void {

}
login(data:string): any {
  debugger

  if(data){
    this.user = true
  sessionStorage.setItem('user', 'true')
  }
 
  
   
  
  }
logout(): void {
  sessionStorage.setItem('user', 'false')
  this.user = false;
}
}
