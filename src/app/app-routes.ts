import { Routes } from '@angular/router';
import { ProductsComponent } from './Features/products/products.component';
import { HomeComponent } from './Features/home/home.component';
import { RippersComponent } from './Features/products/rippers/rippers.component';
import { CultivatorsComponent } from './Features/products/cultivators/cultivators.component';
import { ShreddersComponent } from './Features/products/shredders/shredders.component';
import { PloughsComponent } from './Features/products/ploughs/ploughs.component';
import { SpecialComponent } from './Features/products/special/special.component';
import { RollersComponent } from './Features/products/rollers/rollers.component';
import { DisksComponent } from './Features/products/disks/disks.component';
import { PartsComponent } from './Features/products/parts/parts.component';
import { ToolsComponent } from './Features/products/tools/tools.component';
import { SubcategoryComponent } from './Features/products/subcategory/subcategory.component';
import { ProjectsComponent } from './Features/projects/projects.component';
import { MdbNewsComponent } from './Shared/mdb-news/mdb-news.component';
import { AboutComponent } from './Features/about/about.component';
import { HistoryComponent } from './Features/history/history.component';
import { AwardsComponent } from './Features/awards/awards.component';
import { ProductComponent } from './Features/products/product/product.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: '', component: HomeComponent, outlet: 'products' },
      { path: 'rippers', component: RippersComponent, outlet: 'products' },
      { path: 'cultivators', component: CultivatorsComponent, outlet: 'products'},
      { path: 'shredders', component: ShreddersComponent, outlet: 'products' },
      { path: 'ploughs', component: PloughsComponent, outlet: 'products' },
      { path: 'special', component: SpecialComponent, outlet: 'products' },
      { path: 'rollers', component: RollersComponent, outlet: 'products' },
      { path: 'disks', component: DisksComponent, outlet: 'products' },
      { path: 'parts', component: PartsComponent, outlet: 'products' },
      { path: 'tools', component: ToolsComponent, outlet: 'products' },
    ],
  },
  { path: 'details/:type/:category/:subCategory', component: SubcategoryComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: MdbNewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'product/:type/:category/:subCategory/:id', component: ProductComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
