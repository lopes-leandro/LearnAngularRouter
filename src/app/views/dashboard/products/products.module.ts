import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductEditComponent, ProductDetailComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class ProductsModule { }
