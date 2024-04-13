import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((a) => a.HomeComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then((a) => a.CartComponent),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./pages/checkout/checkout.component').then(
        (a) => a.CheckoutComponent
      ),
  },

  {
    path: 'cheap',
    loadComponent: () =>
      import('./pages/cheap/cheap.component').then((a) => a.CheapComponent),
  },
  {
    path: 'affordable',
    loadComponent: () =>
      import('./pages/affordable/affordable.component').then((a) => a.AffordableComponent),
  },
  {
    path: 'costly',
    loadComponent: () =>
      import('./pages/costly/costly.component').then(
        (a) => a.CostlyComponent
      ),
  },
];
