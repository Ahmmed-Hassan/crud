//#region imports
import { AlertifyService } from './../Services/alertify.service';
import { EditDialogComponent } from './../edit-dialog/edit-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

import { EmployeesService } from './../Services/employees.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { NewDialogComponent } from '../new-dialog/new-dialog.component';
//endregion imports
//#region component
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  //#region variables
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'phone', 'address', 'buttons'];
  //#endregion variables
  //#region constructor
  constructor(
    private employeesService: EmployeesService,
    public dialog: MatDialog,
    private alertify: AlertifyService
  ) {}
  //#endregion constructor
  //#region hooks
  ngOnInit(): void {
    this.getEmployees();
    this.alertify.success('logged in Successfully');
  }
  //#endregion hooks
  //#region functions
  openDialog() {
    this.dialog
      .open(NewDialogComponent)
      .afterClosed()
      .subscribe((res) => {
        if (res == 'submit') {
          this.getEmployees();
          this.alertify.success('Added Successfully');
        }
      });
  }
  openEditDialog(data: any) {
    this.dialog
      .open(EditDialogComponent, { data: data })
      .afterClosed()
      .subscribe((res) => {
        if (res == 'submit') {
          this.getEmployees();
          this.alertify.success('Edited Successfully');
        }
      });
  }
  getEmployees() {
    this.employeesService.getEmployees().subscribe((res) => {
      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource.paginator = this.paginator;
    });
  }

  confirmDelete(id: any) {
    this.alertify.confirm('Are you sure do you want to delete!', () => {
      this.employeesService
        .deleteEmployee(id)
        .subscribe(() => this.getEmployees());
      this.alertify.success('Deleted Succesfully');
    });
  }
  //#endregion functions
}
//#endregion component
