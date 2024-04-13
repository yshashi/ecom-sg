import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Product,
  ProductCount,
  ProductStore,
} from '../stores/products/product.store';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private productStore: ProductStore) {}

  fetchProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
      map((res) => {
        this.productStore.setProducts(res);
        let cheapProducts = res.filter((a) => a.price < 100);
        let affordableProducts = res.filter(
          (a) => a.price > 100 && a.price <= 500
        );
        let costlyProducts = res.filter((a) => a.price > 500);
        const counts: ProductCount = {
          cheap: cheapProducts.length,
          affordable: affordableProducts.length,
          costly: costlyProducts.length,
        };
        this.productStore.setProductCounts(counts);
        return res;
      })
    );
  }
}
