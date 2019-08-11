import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CommunicateService } from './communicate.service';
import { CartModel } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {

  private sub: Subscription;

  private cartProducts = new Array<CartModel>();
  private productInCart: CartModel;
  private totalQuantity: number;
  private totalPrice: number;

  constructor(private communicateService: CommunicateService) { }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProducts(): Array<CartModel> {

    this.sub = this.communicateService.channel$.subscribe(
      data => (this.pushDataToCart(data))
    );

    return this.cartProducts;
  }

  getTotalQuantity() {
    this.totalQuantity = 0;

    this.cartProducts.forEach((value) => {
      this.totalQuantity += value.quantity;
    });

    return this.totalQuantity;
  }

  getTotalPrice() {
    this.totalPrice = 0;

    this.cartProducts.forEach((value) => {
      this.totalPrice += value.price * value.quantity;
    });

    return this.totalPrice;
  }

  addItem(product: CartModel): void {

    this.findProductInCart(product);
    this.productInCart.quantity++;
  }

  deleteItem(product: CartModel): void {

    this.findProductInCart(product);

    if (this.productInCart.quantity === 1) {

      this.removeItem(product);
    } else {

      this.productInCart.quantity--;
    }
  }

  removeItem(product: CartModel): void {

    this.cartProducts.splice(this.cartProducts.indexOf(product), 1);
  }

  removeAll(): void {

    this.cartProducts.length = 0;
  }

  private pushDataToCart(cartData: CartModel): void {

    this.findProductInCart(cartData);

    if (this.productInCart) {

      this.productInCart.quantity++;
    } else {

      cartData.quantity = 1;
      this.cartProducts.push(cartData);
    }
  }

  private findProductInCart(product: CartModel): void {

    this.productInCart = this.cartProducts.find(item => item.id === product.id);
  }
}
