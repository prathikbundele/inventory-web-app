import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  categoriesList : any
  selectedCategoryId : any = ""
  productsList : any
  selectedProductId : any = "";
  selectedProduct = {
    productId : '',
    categoryId : '',
    productName : '',
    quantity : '',
    purchasePrice : '',
    sellingPrice : ''
  };
  inputQuantity : any = null;
  inputDiscount : number = null
  lineItems  = []

  constructor(private http : HttpClient, private dialog : MatDialog) { }

  ngOnInit() {
    this.getCategories()
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
  getAlProducts(){
    var url = "http://localhost:8080/product/product/" + this.selectedCategoryId;
    this.http.get(url)
    .subscribe(res => {
      this.productsList = res
    })
  }

  changeProduct(event){
    console.log(event)
    this.selectedProduct = event
  }

  addProductToList(){
    var product : any = {}
    product['productId'] = this.selectedProduct.productId;
    product['productName'] = this.selectedProduct.productName;
    product['purchasePrice'] = this.selectedProduct.purchasePrice;
    product['sellingPrice'] = this.selectedProduct.sellingPrice;
    product['quantity'] = this.inputQuantity
    this.lineItems.push(product)
  }
  getTotalAmount(){
    var amt = 0;
    for(var i in this.lineItems){
      amt = amt + this.lineItems[i].quantity * this.lineItems[i].sellingPrice
    }
    return amt
  }

  placeOrder(){
    var body : any = {}
    body.mobile = "";
    body.discount = this.inputDiscount;
    body.lineItems = this.lineItems;
    this.http.post('http://localhost:8080/order/place/order', body, { observe : 'response'})
    .subscribe(res => {
      if(res.status == 200){
        console.log(res)
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          data : {
            message : 'Order Placed'
          }
        })
        dialogRef.afterClosed().subscribe(res => {
          this.selectedCategoryId = "";
          this.selectedProductId = "";
          this.lineItems = []
          this.inputQuantity = 0;
          this.inputDiscount = 0
        })
      }
    })
  }

}
