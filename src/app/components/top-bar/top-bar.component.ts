import { ProductService } from 'src/app/service/product.service';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  user: any;
  cartCount = 0;

  constructor(
    private router: Router,
    public authService: AuthService,
    public productService: ProductService
  ) { }

  ngOnInit() {
   this.user = this.authService.currentUser();
  }

  setCartCount(count) {
    this.cartCount = count;
    console.log(this.cartCount);
  }
}
