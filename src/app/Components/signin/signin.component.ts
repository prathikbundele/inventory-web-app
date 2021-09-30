import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  view : string

  constructor(private router : Router) { 
    this.view = 'login'
  }

  ngOnInit() {
    this.getLoginStatus();
  }

  getLoginStatus(){
    if(localStorage.getItem('userLoggedIn') == 'true'){
      this.router.navigate(['stock-report']);
    }
  }

  changeView(item : string){
    this.view = item
  }

}
