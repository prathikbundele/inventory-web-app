import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  inputUsername : string;
  inputPassword : string;
  inputFirstName : string;
  inputLastName : string;
  inputEmail : string;
  inputMobile : number;

  constructor( private http : HttpClient, private dialog : MatDialog) { }

  ngOnInit() {
  }

  registerUser(){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    var body = {username : this.inputUsername,
      password : this.inputPassword,
      firstName : this.inputFirstName,
      lastname : this.inputLastName,
      email : this.inputEmail,
      mobile : this.inputMobile
      }
    
    this.http.post('http://localhost:8080/user/register', JSON.stringify(body), { headers : headers, observe : 'response'} )
    .subscribe(res => {
      if(res.status == 200){
        console.log("User Registration Successful")
         const dialogRef = this.dialog.open(ConfirmDialogComponent, {
           data: {
             message : 'User Registration Successful'
           }
         })
         dialogRef.afterClosed().subscribe(res => {
           this.goToLogin();
         })
      }
    },
    error => {
      console.log(error.message)
    }
    )
  }
  goToLogin(){
    this.newItemEvent.emit('login')
  }

}
