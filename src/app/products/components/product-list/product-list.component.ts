import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products-service/products.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<IProduct>;
  private productsData: Array<IProduct>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

}
