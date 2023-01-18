import { Validators } from '@angular/forms';
//#region imports
import { EmployeesService } from './../Services/employees.service';
import { EmployeesComponent } from './../employees/employees.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
//#endregion imports
//#region component
@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.scss'],
})
export class NewDialogComponent implements OnInit {
  //#region variables
  employeeForm!: FormGroup;
  //#endregion variables
  //#region constructor
  constructor(
    public dialogRef: MatDialogRef<EmployeesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private employeesService: EmployeesService
  ) {}
  //#endregion constructor
  //#region hooks
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }
  //#endregion hooks
//#region functions
  onSubmit() {
    // console.log(this.employeeForm.value)
    this.employeesService.addEmployee(this.employeeForm.value).subscribe(() => {
      this.dialogRef.close('submit');
    });
  }
//#endregion functions
}
//#endregion component
