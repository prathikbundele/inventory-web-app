import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SigninComponent } from './Components/signin/signin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RoleManagementComponent } from './Components/role-management/role-management.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { SellComponent } from './Components/sell/sell.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { PlaceOrderComponent } from './Components/place-order/place-order.component';
import { SalesReportComponent } from './Components/sales-report/sales-report.component';
import { StockReportComponent } from './Components/stock-report/stock-report.component';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    RoleManagementComponent,
    AddProductComponent,
    SellComponent,
    AddCategoryComponent,
    UpdateProductComponent,
    ReportsComponent,
    PlaceOrderComponent,
    SalesReportComponent,
    StockReportComponent,
    ConfirmDialogComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [
    ConfirmDialogComponent
  ]
})
export class AppModule { }
