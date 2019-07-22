import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }
