import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  products = [];
  constructor() { }

  ngOnInit() {
  }
getAddedProducts = (product) => {
  this.products.push(product);
  console.log(this.products);
}
}
