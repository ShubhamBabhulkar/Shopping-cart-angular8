import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Input('product') product;
  quantity: any;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
  }
  addQuantity = (product) => {
    product.quantity++;
    this.addToCart(product);
  }
  removeQuantity = (product) => {
    product.quantity--;
    this.addToCart(product);
  }

  addToCart = (product) => {
    console.log(product);
    product.price = product.rs * product.quantity;
    this.productService.setAddedProducts(product);
  }
}
