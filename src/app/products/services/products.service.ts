import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product.model';
import { Category, Color } from '../../shared/enums';

const products: Array<ProductModel> = [{
  id: 0,
  name: 'FIRST PRODUCT',
  description: 'Some description',
  price: 150.75,
  category: Category.Kitchen,
  isAvailable: true,
  colors: [ Color.Brown, Color.Yellow ]
},
{
  id: 1,
  name: 'SECOND PRODUCT',
  description: 'Some other description',
  price: 299.99,
  category: Category.Textiles,
  isAvailable: false,
  colors: [ Color.White, Color.Black, Color.Grey ]
}];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<ProductModel> {
    return products;
  }
}
