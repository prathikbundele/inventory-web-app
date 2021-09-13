import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  view : string

  constructor() { 
    this.view = 'login'
  }

  ngOnInit() {
  }

  changeView(item : string){
    this.view = item
  }

}
