import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CategoryOverviewComponent } from './category-overview/category-overview.component';
import { ProductComponent } from './product/product.component';
import { SpecialsPageComponent } from './specials-page/specials-page.component';

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
      { path: 'overview/:type/:category/:set', component: CategoryOverviewComponent },
      { path: 'specials', component: SpecialsPageComponent },
    ],
  },
];
