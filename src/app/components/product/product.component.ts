import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product') product;
  quantity = 0;
  constructor(
    private productService: ProductService
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
    this.productService.setAddedProducts(product);
  }
}
