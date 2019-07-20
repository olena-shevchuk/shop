import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: ProductModel;

  @Output()
  buy = new EventEmitter<ProductModel>();

  constructor() {
  }

  ngOnInit() {
  }

  onBuy(): void {
    this.buy.emit(this.product);
  }
}
