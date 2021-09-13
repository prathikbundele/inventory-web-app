import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  data : any;
  categoriesList : any;
  inputProductName : string;
  selectedCategoryId : any = ""

  constructor( private http : HttpClient, private dialog : MatDialog ) { }

  ngOnInit() {
    this.getCategories();
  }
  getLoginStatus(){
    if(localStorage.getItem('userLoggedIn') == 'true'){
      return true
    }
    return false;
  }

  getCategories(){
    this.http.get('http://localhost:8080/product/category')
    .subscribe(res => {
      this.categoriesList = res
    })
  }
  selectCategoryId(id){
    this.selectedCategoryId = id
  }
  addProduct(){
    var body : any = {}
    body.categoryId = this.selectedCategoryId
    body.productName = this.inputProductName
    this.http.post('http://localhost:8080/product/product/add', body, { observe : 'response'})
    .subscribe(res => {
      if(res.status == 200){
        this.data = res;
        console.log(this.data)
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          data : {
            message : 'Product Added'
          }
        })
        dialogRef.afterClosed().subscribe(res => {
          this.selectedCategoryId ="";
          this.inputProductName = "";
        })
      }
      
    })
  }

}
