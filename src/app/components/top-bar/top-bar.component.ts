import { ProductService } from 'src/app/service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  cartCount = 0;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {}

  setCartCount(count) {
    this.cartCount = count;
  }
}
