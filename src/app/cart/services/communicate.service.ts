import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CartModel } from '../models/cart.model';
import { ProductModel } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {

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
