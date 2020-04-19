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
      brand: 'Milkfood',
      name: 'Milkfood Rich Desi Daneder Ghee',
      mrp: '233',
      rs: '32',
      off: '20'
    },
    {
      brand: 'Milkfood',
      name: 'Milkfood Rich Desi Daneder Ghee',
      mrp: '233',
      rs: '32',
      off: '20'
    },
    {
      brand: 'Milkfood',
      name: 'Milkfood Rich Desi Daneder Ghee',
      mrp: '233',
      rs: '32',
      off: '20'
    },
    {
      brand: 'Milkfood',
      name: 'Milkfood Rich Desi Daneder Ghee',
      mrp: '233',
      rs: '32',
      off: '20'
    },
    {
      brand: 'Milkfood',
      name: 'Milkfood Rich Desi Daneder Ghee',
      mrp: '233',
      rs: '32',
      off: '20'
    },
    {
      brand: 'Milkfood',
      name: 'Milkfood Rich Desi Daneder Ghee',
      mrp: '233',
      rs: '32',
      off: '20'
    }];
  }
}
