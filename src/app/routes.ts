import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { RippersComponent } from './products/rippers/rippers.component';
import { CultivatorsComponent } from './products/cultivators/cultivators.component';
import { ShreddersComponent } from './products/shredders/shredders.component';
import { PloughsComponent } from './products/ploughs/ploughs.component';
import { SpecialComponent } from './products/special/special.component';
import { RollersComponent } from './products/rollers/rollers.component';
import { DisksComponent } from './products/disks/disks.component';
import { PartsComponent } from './products/parts/parts.component';
import { ToolsComponent } from './products/tools/tools.component';
import { SubcategoryComponent } from './products/subcategory/subcategory.component';
import { ProjectsComponent } from './projects/projects.component';
import { MdbNewsComponent } from './mdb-news/mdb-news.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { AwardsComponent } from './awards/awards.component';
import { ProductComponent } from './products/product/product.component';
import { AdminComponent } from './admin/admin.component';
import { PloughControlsComponent } from './admin/controls/ploughs/plough-controls/plough-controls.component';
import { EditPloughsComponent } from './admin/controls/ploughs/edit-ploughs/edit-ploughs.component';
import { AddPloughComponent } from './admin/controls/ploughs/add-plough/add-plough.component';
import { AddCategoryComponent } from './admin/controls/ploughs/add-category/add-category.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: '', component: HomeComponent, outlet: 'products' },
      { path: 'rippers', component: RippersComponent, outlet: 'products' },
      { path: 'cultivators', component: CultivatorsComponent,outlet: 'products'},
      { path: 'shredders', component: ShreddersComponent, outlet: 'products' },
      { path: 'ploughs', component: PloughsComponent, outlet: 'products'},
      { path: 'special', component: SpecialComponent, outlet: 'products' },
      { path: 'rollers', component: RollersComponent, outlet: 'products' },
      { path: 'disks', component: DisksComponent, outlet: 'products' },
      { path: 'parts', component: PartsComponent, outlet: 'products' },
      { path: 'tools', component: ToolsComponent, outlet: 'products' },

    ],
  },
  { path: 'details/:type/:category/:subCategory',component:SubcategoryComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: MdbNewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'product/:type/:category/:subCategory/:id',component:ProductComponent},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'ploughs',
        component: PloughControlsComponent,
        outlet: 'admin',
        children: [
          { path: 'edit', component: EditPloughsComponent, outlet: 'controls' },
          { path: 'add', component: AddPloughComponent, outlet: 'controls' },
          {
            path: 'addCategory',
            component: AddCategoryComponent,
            outlet: 'controls',
          },
        ],
      },
    ],
  },
  { path: '**', redirectTo: '/home' },

];

export default routes;
