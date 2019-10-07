import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubcategoryComponent } from './products/subcategory/subcategory.component';
import { ProjectsComponent } from './about-us/projects/projects.component';
import { NewsComponent } from './news/news.component';
import { HistoryComponent } from './about-us/history/history.component';
import { AwardsComponent } from './about-us/awards/awards.component';
import { ProductComponent } from './products/product/product.component';
import { TheTeamComponent } from './about-us/the-team/the-team.component';
import { AboutInnovationsComponent } from './about-us/about-innovations/about-innovations.component';
import { ExpositionsComponent } from './about-us/expositions/expositions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExpoFullComponent } from './about-us/expositions/expo-full/expo-full.component';

export const featureRoutes: Routes = [
  { path: 'product/:type/:category/:subCategory/:id', component: ProductComponent },
  { path: 'details/:type/:category/:subCategory', component: SubcategoryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  {
    path: 'about',
    children: [
      { path: 'expositions',component: ExpositionsComponent},
      { path: 'expositions/:id', component: ExpoFullComponent,pathMatch:'full' },
      { path: 'projects', component: ProjectsComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'team', component: TheTeamComponent },
      { path: 'awards', component: AwardsComponent },
      { path: 'innovations', component: AboutInnovationsComponent },
    ],
  },
  { path: 'contacts', component: ContactsComponent },
  { path: 'admin', loadChildren: async () => (await import('./admin/admin.module')).AdminModule },
];
