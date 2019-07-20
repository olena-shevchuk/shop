import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartModel } from '../../models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  product: CartModel;

  @Output()
  addItem = new EventEmitter<CartModel>();

  @Output()
  deleteItem = new EventEmitter<CartModel>();

  @Output()
  removeItem = new EventEmitter<CartModel>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(): void {

    this.addItem.emit(this.product);
  }

  onDeleteItem(): void {

    this.deleteItem.emit(this.product);
  }

  onRemoveItem(): void {

    this.removeItem.emit(this.product);
  }
}
