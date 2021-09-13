import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  stockReportData : any;
  salesReportData : any;

  constructor( private http : HttpClient) { }

  ngOnInit() {
  }

  getStockReport(){
    this.http.get('http://localhost:8080/order/product/report')
    .subscribe(res => {
      this.stockReportData = res
    })
  }
  getSalesReport(){
    this.http.get('http://localhost:8080/order/order/report')
    .subscribe(res => {
      this.salesReportData = res
    })
  }

}
