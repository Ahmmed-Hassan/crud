//#region imports
import { UserService } from './../Services/user.service';
import { AuthService } from './../Services/Auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//#endregion import
//#region component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //#region variables
  signInForm: FormGroup;
  //#endregion variables
  //#region constructor
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  //#endregion constructor
  //#region hooks
  ngOnInit(): void {
    this.form();
  }
  //#endregion hooks
  //#region functions
  form() {
    this.signInForm = this.fb.group({
      email: ['test@gmail.com', [Validators.email,Validators.required]],
      password: ['123', Validators.required],
    });
  }

  onSubmit() {
    if (this.signInForm && this.signInForm.valid) {
      this.authService.login(this.signInForm.value);
    }
    this.router.navigate(['/employees']);
  }
  //#endregion functions
}
//#endregion component
