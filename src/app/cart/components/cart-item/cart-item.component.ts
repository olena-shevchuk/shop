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
  addItem: EventEmitter<CartModel> = new EventEmitter<CartModel>();
  deleteItem: EventEmitter<CartModel> = new EventEmitter<CartModel>();
  remove: EventEmitter<CartModel> = new EventEmitter<CartModel>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(): void {

    this.addItem.emit(this.product);
  }

  onDeleteItem(): void {

    this.deleteItem.emit(this.product);
  }

  onRemove(): void {

    this.remove.emit(this.product);
  }
}
