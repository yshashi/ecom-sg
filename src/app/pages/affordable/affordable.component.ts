import { Component } from '@angular/core';
import { Product, ProductStore } from '../../shared/stores/products/product.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-affordable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './affordable.component.html',
  styleUrl: './affordable.component.scss'
})
export class AffordableComponent {
  affordableProducts: Product[] = []
  constructor(private productStore: ProductStore) {

  }
  ngOnInit(): void {
    this.productStore.getProducts()
    .subscribe(res => {
      this.affordableProducts = res.filter(a=> a.price > 100 && a.price <=500);
    })
  }
}
