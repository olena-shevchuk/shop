import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product.model';
import { Category, Color } from '../../shared/enums';

const products: Array<ProductModel> = [{
  id: 0,
  name: 'FIRST PRODUCT',
  description: 'First description of some product',
  price: 150.75,
  category: Category.Kitchen,
  isAvailable: true,
  colors: [ Color.Brown, Color.Yellow ]
},
{
  id: 1,
  name: 'SECOND PRODUCT',
  description: 'Second description of some product',
  price: 299.99,
  category: Category.Textiles,
  isAvailable: false,
  colors: [ Color.White, Color.Black, Color.Grey ]
},
{
  id: 2,
  name: 'THIRD PRODUCT',
  description: 'Third description of some product',
  price: 98.15,
  category: Category.Decor,
  isAvailable: true,
  colors: [ Color.Red, Color.Grey ]
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
