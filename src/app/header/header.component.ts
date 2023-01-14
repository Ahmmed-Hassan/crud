//#region imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth.service';
//#endregion imports
//#region component
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //#region constructor
  constructor(private authService: AuthService, private router: Router) {}
  //#endregion constructor
  //#region hooks
  ngOnInit(): void {}
  //#endregion hooks
  //#region functions
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  //#endregion functions
}
//#endregion component
