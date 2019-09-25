import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CategoryOverviewComponent } from './category-overview/category-overview.component';
import { ProductComponent } from './product/product.component';

export const productsRouting: Routes = [
  {
    path: 'products',
    children: [
      { path: '', component: ProductsComponent },
      {
        path: 'overview/:type/:category/:series/:id',
        component: ProductComponent,
        pathMatch: 'full',
      },
      { path: 'overview/:type/:category', component: CategoryOverviewComponent, pathMatch: 'full' },
    ],
  },
];
