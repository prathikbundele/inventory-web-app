import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  salesReportData : any;
  inputStartDate : Date;
  inputEndDate : Date;
  constructor(private http : HttpClient) { }

  ngOnInit() {
    
  }
  getLoginStatus(){
    if(localStorage.getItem('userLoggedIn') == 'true'){
      return true
    }
    return false;
  }

  getSalesReport(){
    var body : any = {};
    body.startDate = this.inputStartDate;
    body.endDate = this.inputEndDate
    this.http.post('http://localhost:8080/order/order/report', body)
    .subscribe(res => {
      this.salesReportData = res
    })
  }

}
