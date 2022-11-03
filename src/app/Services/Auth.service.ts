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
  get isLoggedIn(): boolean {
    // debugger
   
    return this.user;
  }
constructor(private userService:UserService) { 
}
ngOnInit(): void {

}
login(data:string): any {
  debugger

  if(data){
    this.user = true
  }
 
  
   
  
  }
logout(): void {
  this.user = false;
}
}
