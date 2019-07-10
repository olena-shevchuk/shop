import { Component, OnInit } from '@angular/core';

import { Category, Color } from '../../../shared/enums';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name = 'PRODUCT';
  description = 'Some product description';
  price = 59.99;
  category = Category.Decor;
  isAvailable = true;
  colors = [ Color.White, Color.Black ];

  constructor() {
  }

  ngOnInit() {
  }

  onBuy() {
    console.log('Purchase of this product');
  }
}
