import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart.service';
import { CartModel } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cartProducts: Array<CartModel> = new Array<CartModel>();
  private sub: Subscription;
  private productInCart: CartModel;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.sub = this.cartService.channel$.subscribe(
      data => (this.pushDataToCart(data))
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onAddItem(product: CartModel): void {

    this.findProductInCart(product);
    this.productInCart.quantity++;
  }

  onDeleteItem(product: CartModel): void {

    this.findProductInCart(product);
    this.productInCart.quantity--;
  }

  onRemove(product: CartModel): void {

    this.cartProducts.splice(this.cartProducts.indexOf(product), 1);
  }

  countTotalPrice() {
    let totalPrice = 0;

    this.cartProducts.forEach((value) => {
      totalPrice += value.price * value.quantity;
    });

    return totalPrice;
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
