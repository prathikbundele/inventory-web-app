import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  inputCategory : string;
  data : any;

  constructor(private http : HttpClient, private dialog : MatDialog) {
    this.inputCategory = ""
  }

  ngOnInit() {
  }
  getLoginStatus(){
    if(localStorage.getItem('userLoggedIn') == 'true'){
      return true
    }
    return false;
  }

  submitCategory(){
    console.log("category : " +this.inputCategory)
    var body : any = {}
    body.categoryName = this.inputCategory
    this.http.post("http://localhost:8080/product/category/add", body, {observe : 'response'})
    .subscribe(res => {
      if(res.status == 200){
        console.log(res)
        this.data = res;
        this.inputCategory = '';
        console.log(this.data.message);

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          data : {
            message : 'Category Added'
          }
        })
        dialogRef.afterClosed().subscribe(res => {
          
        })
      }
      
    })
  }

}
