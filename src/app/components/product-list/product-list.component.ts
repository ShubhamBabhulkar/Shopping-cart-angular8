import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: {};

  constructor(private productService: ProductService) { }

ngOnInit() {
  this.getProducts()
  .then(products =>  this.products = products)
  .catch(err => console.log(err.message));
}
  getProducts = () => {
    return new Promise( (resolve, reject) => {
      const products = this.productService.getProducts();
      if (products) {
        resolve(products);
      } else {
        reject(new Error('Product not found'));
      }
    });
  }

}
