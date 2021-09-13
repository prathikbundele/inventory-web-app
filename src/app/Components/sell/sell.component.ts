import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getLoginStatus(){
    if(localStorage.getItem('userLoggedIn') == 'true'){
      return true
    }
    return false;
  }

}
