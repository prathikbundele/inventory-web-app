import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem('userLoggedIn', 'false')
    localStorage.removeItem('userLoggedIn')
    this.router.navigate(['signin'])
  }

}
