import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/stores/products/product.store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products: Product[] = [];
  constructor(private productService: ProductService) {
    productService.fetchProducts().subscribe(res => {
      this.products = res;
    })
  }
}
