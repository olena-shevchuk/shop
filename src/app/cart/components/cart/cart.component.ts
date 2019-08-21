import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartModel } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Array<CartModel>;
  sortBy = 'Price';

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getProducts();
  }

  onAddItem(product: CartModel): void {

    this.cartService.addItem(product);
  }

  onDeleteItem(product: CartModel): void {

    this.cartService.deleteItem(product);
  }

  onRemoveItem(product: CartModel): void {

    this.cartService.removeItem(product);
  }

  onRemoveAll(): void {

    this.cartService.removeAll();
  }

  getTotalQuantity() {

    return this.cartService.getTotalQuantity();
  }

  getTotalPrice() {

    return this.cartService.getTotalPrice();
  }
}
