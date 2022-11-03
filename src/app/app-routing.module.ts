import { EmployeesComponent } from './employees/employees.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './Services/auth-gaurd.service';

const routes: Routes = [
  {path:'employees', canActivate:[AuthGaurdService],component: EmployeesComponent},
  {path: '', redirectTo:'employees', pathMatch:'full'},
  {path: 'login' ,component:LoginComponent},
  {path:'**',redirectTo:'employees'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
