import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  inputUsername : string;
  inputPassword : string;
  userData :any;

  constructor( private http : HttpClient, private router : Router) { }

  ngOnInit() {
  }

  goToRegister(){
    this.newItemEvent.emit('register')
  }
  userLogin(){

    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    var body = {username : this.inputUsername, password : this.inputPassword}
    
    this.http.post('http://localhost:8080/user/login', JSON.stringify(body), { headers : headers, observe : 'response'} )
    .subscribe(res => {
      if(res.status == 200){
        console.log("Login successful");
        this.userData = res;
        localStorage.setItem('userLoggedIn', "true")
        localStorage.setItem('userRole', this.userData.body.roleName)
        console.log(this.userData)
        console.log(this.userData.body.roleName)
        console.log(localStorage.getItem('userRole'))
        this.router.navigate(['stock-report'])
      }
    },
    error =>{
      console.log(error.error.message)
    }
    )
  }

}
