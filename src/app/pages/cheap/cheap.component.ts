import { Component } from '@angular/core';
import { Product, ProductStore } from '../../shared/stores/products/product.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cheap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cheap.component.html',
  styleUrl: './cheap.component.scss'
})
export class CheapComponent {
  cheapProducts: Product[] = []
  constructor(private productStore: ProductStore) {

  }
  ngOnInit(): void {
    this.productStore.getProducts()
    .subscribe(res => {
      this.cheapProducts = res.filter(a=> a.price < 100);
    })
  }
}
