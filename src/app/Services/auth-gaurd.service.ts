import { AuthService } from './Auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router:Router, private authService:AuthService) { }

canActivate(): boolean {
  return this.checkIsLoggedIn()
}


checkIsLoggedIn():boolean{
  if(this.authService.isLoggedIn){
    return true;
  }else{
    this.router.navigate(['/login']);
    return false;
  }

}
}
