import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubcategoryComponent } from './products/subcategory/subcategory.component';
import { ProjectsComponent } from './projects/projects.component';
import { MdbNewsComponent } from '../Shared/mdb-news/mdb-news.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { AwardsComponent } from './awards/awards.component';
import { ProductComponent } from './products/product/product.component';

export const featureRoutes: Routes = [
  { path: 'details/:type/:category/:subCategory', component: SubcategoryComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: MdbNewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'product/:type/:category/:subCategory/:id', component: ProductComponent },
];
