import { Component, OnInit } from '@angular/core';
import { Product, ProductStore } from '../../shared/stores/products/product.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartProdcuts: Product[] = []
  constructor(private productStore: ProductStore) {

  }
  ngOnInit(): void {
    this.productStore.getProducts()
    .subscribe(res => {
      this.cartProdcuts = res;
    })
  }
}
