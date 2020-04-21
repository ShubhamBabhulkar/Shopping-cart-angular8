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
      off: '20',
      img:'https://n3.sdlcdn.com/imgs/e/l/1/MSG-Cow-Desi-Ghee-1-SDL595875615-1-fddf8.png'
    },
    {
      _id: 2,
      brand: 'Fortune',
      name: 'Fortune Sunlite Refined Sunflower Oil Pouch',
      mrp: '120',
      rs: '98',
      off: '18',
      img:'https://rukminim1.flixcart.com/image/832/832/k7usyvk0/edible-oil/e/t/c/1-sunlite-refined-pouch-sunflower-oil-fortune-original-imafpzwhyyhhvzbk.jpeg?q=70'
    },
    {
      _id: 3,
      brand: 'Hambre',
      name: 'Hambre Raisin_Golden_250gm Raisins  (250 g)',
      mrp: '430',
      rs: '245',
      off: '43',
      img: 'https://rukminim1.flixcart.com/image/832/832/jp02t8w0/nut-dry-fruit/2/c/3/250-raisin-golden-250gm-pouch-hambre-original-imafb9yprzn7jrg8.jpeg?q=70'
    },
    {
      _id: 4,
      brand: 'TATA',
      name: 'Tata Iodized Salt  (1 kg)',
      mrp: '20',
      rs: '18',
      off: '10',
      img: 'https://rukminim1.flixcart.com/image/832/832/jq4353k0/salt/q/w/m/1-na-iodized-salt-tata-original-imafc7agxkbypvgr.jpeg?q=70'
    },
    {
      _id: 5,
      brand: 'Cadbury',
      name: 'Cadbury Bournvita Health Nutrition Drink  (500 g, Chocolate Flavored)',
      mrp: '217',
      rs: '210',
      off: '3',
      img: 'https://rukminim1.flixcart.com/image/832/832/jr0y9ow0/energy-sport-drink-mix/m/r/w/500-pro-health-chocolate-cadbury-bournvita-original-imafcx6zg3sazzzk.jpeg?q=70'
    },
    {
      _id: 6,
      brand: 'Britannia',
      name: 'Britannia Little Hearts Classic Biscuits  (34.5 g)',
      mrp: '10',
      rs: '9',
      off: '10',
      img: 'https://rukminim1.flixcart.com/image/832/832/k8j3gcw0/cookie-biscuit/k/8/g/34-5-little-hearts-classic-biscuits-britannia-original-imafqgw9ngqaq69q.jpeg?q=70'
    },
    {
      _id: 7,
      brand: 'Milkfood',
      name: 'Milkfood Rich Desi Daneder Ghee',
      mrp: '233',
      rs: '32',
      off: '20',
      img:'https://n3.sdlcdn.com/imgs/e/l/1/MSG-Cow-Desi-Ghee-1-SDL595875615-1-fddf8.png'
    },
    {
      _id: 8,
      brand: 'Fortune',
      name: 'Fortune Sunlite Refined Sunflower Oil Pouch',
      mrp: '120',
      rs: '98',
      off: '18',
      img:'https://rukminim1.flixcart.com/image/832/832/k7usyvk0/edible-oil/e/t/c/1-sunlite-refined-pouch-sunflower-oil-fortune-original-imafpzwhyyhhvzbk.jpeg?q=70'
    },
    {
      _id: 9,
      brand: 'Hambre',
      name: 'Hambre Raisin_Golden_250gm Raisins  (250 g)',
      mrp: '430',
      rs: '245',
      off: '43',
      img: 'https://rukminim1.flixcart.com/image/832/832/jp02t8w0/nut-dry-fruit/2/c/3/250-raisin-golden-250gm-pouch-hambre-original-imafb9yprzn7jrg8.jpeg?q=70'
    },
    {
      _id: 10,
      brand: 'TATA',
      name: 'Tata Iodized Salt  (1 kg)',
      mrp: '20',
      rs: '18',
      off: '10',
      img: 'https://rukminim1.flixcart.com/image/832/832/jq4353k0/salt/q/w/m/1-na-iodized-salt-tata-original-imafc7agxkbypvgr.jpeg?q=70'
    },
    {
      _id: 11,
      brand: 'Cadbury',
      name: 'Cadbury Bournvita Health Nutrition Drink  (500 g, Chocolate Flavored)',
      mrp: '217',
      rs: '210',
      off: '3',
      img: 'https://rukminim1.flixcart.com/image/832/832/jr0y9ow0/energy-sport-drink-mix/m/r/w/500-pro-health-chocolate-cadbury-bournvita-original-imafcx6zg3sazzzk.jpeg?q=70'
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
