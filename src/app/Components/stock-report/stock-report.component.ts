import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-report',
  templateUrl: './stock-report.component.html',
  styleUrls: ['./stock-report.component.css']
})
export class StockReportComponent implements OnInit {
  stockReportData :any;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getStockReport();
  }
  getLoginStatus(){
    if(localStorage.getItem('userLoggedIn') == 'true'){
      return true
    }
    return false;
  }

  getStockReport(){
    this.http.get('http://localhost:8080/order/product/report')
    .subscribe(res => {
      this.stockReportData = res
    })
  }

}
