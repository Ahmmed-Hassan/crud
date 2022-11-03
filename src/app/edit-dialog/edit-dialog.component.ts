//#region imports
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesComponent } from '../employees/employees.component';
import { EmployeesService } from '../Services/employees.service';
//endregion imports
//#region component
@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  //#region variables
  employeeForm: FormGroup;
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
    this.form();
  }
  //#endregion hooks
  //#region functions
  form() {
    this.employeeForm = this.fb.group({
      name: [this.data.name],
      phone: [this.data.phone],
      address: [this.data.address],
      // id:[this.data.id]
    });
  }

  onSubmit() {
    this.employeesService
      .editEmployee(this.data.id, this.employeeForm.value)
      .subscribe(() => {
        this.dialogRef.close('submit');
      });
  }
  //#endregion functions
}
//#endregion component
