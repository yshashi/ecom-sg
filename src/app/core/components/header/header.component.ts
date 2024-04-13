import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCount, ProductStore } from '../../../shared/stores/products/product.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  productsCount!: ProductCount;
  constructor(private productstore: ProductStore) {
    this.productstore.getProductCounts()
    .subscribe(res => {
      this.productsCount = res;
    })
  }
}
