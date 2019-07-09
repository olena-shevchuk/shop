import { Injectable } from '@angular/core';

import { IProduct } from '../../models/product.model';
import { Category, Color } from '../../../shared/enums';

const products: Array<IProduct> = [ {
  id: 0,
  name: 'First product',
  description: null,
  price: 150.00,
  category: Category.Kitchen,
  isAvailable: true,
  colors: [ Color.Brown, Color.Yellow ]
},
{
  id: 1,
  name: 'Second product',
  description: 'Some description',
  price: 300.00,
  category: Category.Textiles,
  isAvailable: false,
  colors: [ Color.White, Color.Black, Color.Grey ]
}];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<IProduct> {
    return products;
  }
}
