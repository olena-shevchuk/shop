import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart-service/cart.service';
import { CartModel } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Array<CartModel>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getProducts();
  }

  countTotalPrice() {
    let totalPrice = 0;

    this.cartProducts.forEach((value) => {
      totalPrice += value.price * value.quantity;
    });

    return totalPrice;
  }

}
