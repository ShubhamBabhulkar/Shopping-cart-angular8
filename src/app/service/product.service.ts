import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  addedProducs = [];
  constructor(private httpRequest: HttpClient) { }

  getProducts = () => {
    return [{
      _id: 1,
      brand: 'Milkfood',
      name: 'Milkfood Rich Desi Daneder Ghee',
      mrp: '233',
      rs: '32',
      off: '20'
    },
    {
      _id: 2,
      brand: 'Milkfood',
      name: 'Milkfood Rich Desi Daneder Ghee',
      mrp: '233',
      rs: '32',
      off: '20'
    },
    {
      _id: 3,
      brand: 'Milkfood',
      name: 'Milkfood Rich Desi Daneder Ghee',
      mrp: '233',
      rs: '32',
      off: '20'
    },
    {
      _id: 4,
      brand: 'Milkfood',
      name: 'Milkfood Rich Desi Daneder Ghee',
      mrp: '233',
      rs: '32',
      off: '20'
    },
    {
      _id: 5,
      brand: 'Milkfood',
      name: 'Milkfood Rich Desi Daneder Ghee',
      mrp: '233',
      rs: '32',
      off: '20'
    },
    {
      _id: 6,
      brand: 'Milkfood',
      name: 'Milkfood Rich Desi Daneder Ghee',
      mrp: '233',
      rs: '32',
      off: '20'
    }];
  }

  setAddedProducts(product) {

    const isProduct = _.find(this.addedProducs, function(addedProduct) {
      return addedProduct._id ===  product._id;
   });
    if (!isProduct) {
     this.addedProducs.push(product);
   } else {
     if (product.quantity === 0) {
       _.remove(this.addedProducs, function(products) {
         return products._id === product._id;
       });
     }
   }
  }
  getAddedProduct() {
    if (this.addedProducs) {
      console.log(this.addedProducs);
      return this.addedProducs;
    }
  }
  getAddedProductsCount() {
    if (this.addedProducs) {
      return this.addedProducs.length;
    }
  }

  getTotalAmount() {
    if (this.addedProducs) {
      return _.sumBy(this.addedProducs, function(product) { return product.price; });
    }
  }
}
