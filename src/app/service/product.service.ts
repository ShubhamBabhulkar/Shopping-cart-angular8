import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/user';

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
}
