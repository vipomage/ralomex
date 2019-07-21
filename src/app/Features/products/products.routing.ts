import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { RippersComponent } from './rippers/rippers.component';
import { CultivatorsComponent } from './cultivators/cultivators.component';
import { ShreddersComponent } from './shredders/shredders.component';
import { PloughsComponent } from './ploughs/ploughs.component';
import { SpecialComponent } from './special/special.component';
import { RollersComponent } from './rollers/rollers.component';
import { DisksComponent } from './disks/disks.component';
import { PartsComponent } from './parts/parts.component';
import { ToolsComponent } from './tools/tools.component';
import { CategoryOverviewComponent } from './category-overview/category-overview.component';

export const productsRouting: Routes = [
  {
    path: 'products',
    children: [
      { path: '', component: ProductsComponent },
      { path: 'overview/:type/:category', component: CategoryOverviewComponent, pathMatch: 'full' },
      { path: 'rippers', component: RippersComponent, outlet: 'products' },
      { path: 'cultivators', component: CultivatorsComponent, outlet: 'products' },
      { path: 'shredders', component: ShreddersComponent, outlet: 'products' },
      { path: 'ploughs', component: PloughsComponent, outlet: 'products' },
      { path: 'special', component: SpecialComponent, outlet: 'products' },
      { path: 'rollers', component: RollersComponent, outlet: 'products' },
      { path: 'disks', component: DisksComponent, outlet: 'products' },
      { path: 'parts', component: PartsComponent, outlet: 'products' },
      { path: 'tools', component: ToolsComponent, outlet: 'products' },
    ],
  },
];
