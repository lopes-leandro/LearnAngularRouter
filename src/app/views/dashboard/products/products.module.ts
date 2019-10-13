import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [ProductsComponent, ProductListComponent, ProductEditComponent, ProductDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
