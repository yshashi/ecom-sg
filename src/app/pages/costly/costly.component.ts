import { Component } from '@angular/core';
import {
  Product,
  ProductStore,
} from '../../shared/stores/products/product.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-costly',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './costly.component.html',
  styleUrl: './costly.component.scss',
})
export class CostlyComponent {
  costlyProduct: Product[] = [];
  constructor(private productStore: ProductStore) {}
  ngOnInit(): void {
    this.productStore.getProducts().subscribe((res) => {
      this.costlyProduct = res.filter((a) => a.price > 500);
    });
  }
}
