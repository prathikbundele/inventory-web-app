import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  selectedCategoryId : any = ""
  categoriesList: any;
  productsList : any;
  selectedProductId  :any = ""
  selectedProduct = {
    productId : '',
    categoryId : '',
    productName : '',
    quantity : '',
    purchasePrice : '',
    sellingPrice : ''
  };
  inputQuantity : any = "";
  inputPurchasePrice : any = "";
  inputSellingPrice : any = ""

  constructor( private http : HttpClient, private dialog : MatDialog) { }

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
    this.getAlProducts();
  }
  getAlProducts(){
    var url = "http://localhost:8080/product/product/" + this.selectedCategoryId;
    this.http.get(url)
    .subscribe(res => {
      this.productsList = res
    })
  }
  changeProduct(event){
    console.log(event.productId)
    this.selectedProduct.productId = event.productId;
    this.selectedProduct.productName = event.productName;
    this.selectedProduct.categoryId = event.categoryId;
    
  }

  updateProduct(){
    var url = 'http://localhost:8080/product/product/update'
    var body :any = {}
    body.categoryId = this.selectedCategoryId;
    body.productName = this.selectedProduct.productName;
    body.quantity = this.inputQuantity
    body.purchasePrice = this.inputPurchasePrice
    body.sellingPrice = this.inputSellingPrice
    this.http.put(url,body, {observe : 'response'})
    .subscribe(res => {
      if(res.status == 200){
        console.log(res)
        const dialogRef = this.dialog.open(ConfirmDialogComponent , {
          data: {
            message : 'Product Updated'
          }
        })
        dialogRef.afterClosed().subscribe(res=> {
          this.selectedCategoryId = "";
          this.selectedProduct.productId = "";
          this.selectedProduct.categoryId = "";
          this.selectedProduct.productName = "";
          this.selectedProductId= "";
          this.inputPurchasePrice = "";
          this.inputQuantity = "";
          this.inputSellingPrice = "";
        })
      }
    })
  }

}
