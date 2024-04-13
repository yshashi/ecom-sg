import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductStore {
  private products$ = new BehaviorSubject<Product[]>([]);
  private productCounts$ = new BehaviorSubject<ProductCount>({
    cheap: 0,
    costly: 0,
    affordable: 0,
  });

  public getProducts() {
    return this.products$.asObservable(); //return the source as observable
  }

  public setProducts(products: Product[]) {
    this.products$.next(products); //sourcing of fata
  }

  public getProductCounts() {
    return this.productCounts$.asObservable();
  }

  public setProductCounts(productCount: ProductCount) {
    this.productCounts$.next(productCount);
  }
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface ProductCount {
  cheap: number;
  affordable: number;
  costly: number;
}

//+6583609294
