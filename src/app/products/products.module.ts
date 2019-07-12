import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  providers: [
    ProductsService
  ],
  exports: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
