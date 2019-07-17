import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ProductModel } from 'src/app/products/models/product.model';
import { CartModel } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private channel = new Subject<CartModel>();
  private cartData: CartModel;

  channel$ = this.channel.asObservable();

  publishData(data: ProductModel) {

    this.cartData = this.convertProductModelToCartModel(data);
    this.channel.next(this.cartData);
  }

  private convertProductModelToCartModel(productData: ProductModel): CartModel {
    return {
      id: productData.id,
      name: productData.name,
      price: productData.price
    } as CartModel;
  }
}
