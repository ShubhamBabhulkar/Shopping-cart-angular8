import { Component, OnInit, Input } from '@angular/core';
import { CartViewComponent } from '../cart-view/cart-view.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product') product;
  quantity = 0;
  constructor(
    private cartViewComponent: CartViewComponent
    ) { }

  ngOnInit() {
  }

  addQuantity = () => {
    this.quantity++;
    this.addToCart(this.product);
  }
  removeQuantity = () => {
    this.quantity--;
    this.addToCart(this.product);
  }

  addToCart = (product) => {
    product.quantity = this.quantity;
    product.price = product.rs * product.quantity;
    this.cartViewComponent.getAddedProducts(product);
  }
}
