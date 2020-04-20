import { TopBarComponent } from './../top-bar/top-bar.component';
import { Component, OnInit, NgZone } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  products = [];
  constructor(
    private topBarComponent: TopBarComponent,
    private zone: NgZone
  ) { }

  ngOnInit() {
  }

  getAddedProducts = (product) => {
    const isProduct = _.find(this.products, function(products) { return products._id ===  product._id});
    console.log(isProduct);
    if (!isProduct) {
      this.zone.run(() => { // <== added
      this.products.push(product);
    });
    } else {
      if (product.quantity === 0) {
        _.remove(this.products, function(product) {
          return product.quantity === 0;
        });
      }
    }
    this.topBarComponent.setCartCount(this.products.length);
  }
}
