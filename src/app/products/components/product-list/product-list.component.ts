import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CommunicateService } from 'src/app/cart/services/communicate.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<Array<ProductModel>>;

  constructor(private productsService: ProductsService, private communicateService: CommunicateService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(product: ProductModel): void {

    this.communicateService.publishData(product);
  }
}
