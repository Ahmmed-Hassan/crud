import { AlertifyService } from './../Services/alertify.service';
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
    private router: Router,
    private alertify: AlertifyService
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
      this.authService.login(this.signInForm.value.email ,this.signInForm.value.password ).subscribe(
        res =>{
          if (res.length > 0) {
            localStorage.setItem('token', 'true');
            this.alertify.success('logged in Successfully');
            this.router.navigate(['/employees']);
          } else {
            localStorage.setItem('token', 'false');
          }
        }
      );
    }
   
  }
  //#endregion functions
}
//#endregion component
