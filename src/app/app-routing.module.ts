import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './Components/signin/signin.component';
import { SellComponent } from './Components/sell/sell.component';
import { RoleManagementComponent } from './Components/role-management/role-management.component'
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PlaceOrderComponent } from './Components/place-order/place-order.component';
import { SalesReportComponent } from './Components/sales-report/sales-report.component';
import { StockReportComponent } from './Components/stock-report/stock-report.component';

const routes: Routes = [
  {
    path : '',
    component : SigninComponent
  },
  
  {
    path : 'signin',
    component : SigninComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'sell',
    component : SellComponent
  },
  {
    path : 'manage-role',
    component : RoleManagementComponent
  },
  {
    path : 'add-product',
    component :AddProductComponent
  },
  {
    path : 'add-category',
    component :AddCategoryComponent
  },
  {
    path : 'update-product',
    component : UpdateProductComponent
  },
  {
    path : 'place-order',
    component : PlaceOrderComponent
  },
  {
    path : 'reports',
    component : ReportsComponent
  },
  {
    path : 'sales-report',
    component : SalesReportComponent
  },
  {
    path : 'stock-report',
    component : StockReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
