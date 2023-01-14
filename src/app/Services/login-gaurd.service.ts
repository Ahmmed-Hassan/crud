import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGaurdService {

  constructor(private router:Router, private authService:AuthService) { }

canActivate(): boolean {
  return this.checkIsLoggedIn()
}

checkIsLoggedIn():boolean{
  if(this.authService.isLoggedIn == 'true'){
    this.router.navigate(['/employees']);
    return false;
  }else{
    
    return true;
  }

}
}
