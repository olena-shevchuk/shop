import { Injectable } from '@angular/core';

import { CartModel } from '../../models/cart.model';

const cartProducts: Array<CartModel> = [{
  id: 0,
  name: 'FIRST PRODUCT IN CART',
  price: 260.13,
  quantity: 5
},
{
  id: 1,
  name: 'SECOND PRODUCT IN CART',
  price: 999.00,
  quantity: 1
}];

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getProducts(): Array<CartModel> {
    return cartProducts;
  }
}
