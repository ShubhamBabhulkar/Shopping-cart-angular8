import { MatcomponentModule } from './models/matcomponent/matcomponent.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductComponent,
    ProductListComponent,
    CartViewComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatcomponentModule
  ],
  providers: [CartViewComponent, TopBarComponent],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
