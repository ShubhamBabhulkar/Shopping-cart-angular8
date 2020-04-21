import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  products = [];
  constructor(
    public productService: ProductService,
  ) { }

  ngOnInit() {
  }
}
