import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {

  usersList : any;
  rolesList : any;
  selectedUsername = "";
  selectedRole = ""

  constructor( private http : HttpClient, private dialog : MatDialog ) { }

  ngOnInit() {
    this.getAllRoles();
    this.getAllUsers();
  }
  getLoginStatus(){
    if(localStorage.getItem('userLoggedIn') == 'true'){
      return true
    }
    return false;
  }

  getAllUsers(){
    this.http.get('http://localhost:8080/user/users')
    .subscribe(data => {
      this.usersList = data
    })
  }
  getAllRoles(){
    this.http.get('http://localhost:8080/user/roles')
    .subscribe(data => {
      this.rolesList = data
    })
  }

  assignRole(){
    var body = {
      username : this.selectedUsername,
      roleName : this.selectedRole
    }
    this.http.post('http://localhost:8080/user/assignrole', body, { observe : 'response'})
    .subscribe(res => {
      if(res.status == 200){
        const dialogRef =  this.dialog.open(ConfirmDialogComponent, {
          data : {
            message : 'Role Assigned'
          }
        })
        dialogRef.afterClosed().subscribe(res => {
          this.selectedRole ="";
          this.selectedUsername = ""
        })
      }
    })
  }

}
