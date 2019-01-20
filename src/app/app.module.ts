import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FireService } from '../tools/services/fire.service';

import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './projects/projects.component';
import { PloughsComponent } from './products/ploughs/ploughs.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { DisksComponent } from './products/disks/disks.component';
import { CultivatorsComponent } from './products/cultivators/cultivators.component';
import { RollersComponent } from './products/rollers/rollers.component';
import { ShreddersComponent } from './products/shredders/shredders.component';
import { SpecialComponent } from './products/special/special.component';
import { PartsComponent } from './products/parts/parts.component';
import { ToolsComponent } from './products/tools/tools.component';
import { RippersComponent } from './products/rippers/rippers.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { AwardsComponent } from './awards/awards.component';
import { AccordionComponent } from './products/accordion/accordion.component';
import { CategoryComponent } from './products/category/category.component';
import { AdminComponent } from './admin/admin.component';
import { EditPloughsComponent } from './admin/controls/ploughs/edit-ploughs/edit-ploughs.component';
import { AddPloughComponent } from './admin/controls/ploughs/add-plough/add-plough.component';
import { PloughControlsComponent } from './admin/controls/ploughs/plough-controls/plough-controls.component';
import { ProductTableComponent } from './products/product-table/product-table.component';
import { AddCategoryComponent } from './admin/controls/ploughs/add-category/add-category.component';

import { keyValueFilterPipe } from '../tools/pipes/key-value-filter.pipe';

import { environment } from '../environments/environment';
import { AccordionModule } from 'primeng/accordion';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MdbFooterComponent } from './mdb-footer/mdb-footer.component';
import { MdbNewsComponent } from './mdb-news/mdb-news.component';
import { MdbAccordionComponent } from './products/mdb-accordion/mdb-accordion.component';
import { MdbTableComponent } from './admin/mdb-table/mdb-table.component';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: '', component: HomeComponent, outlet: 'products' },
      { path: 'rippers', component: RippersComponent, outlet: 'products' },
      {
        path: 'cultivators',
        component: CultivatorsComponent,
        outlet: 'products',
      },
      { path: 'shredders', component: ShreddersComponent, outlet: 'products' },
      { path: 'ploughs', component: PloughsComponent, outlet: 'products' },
      { path: 'special', component: SpecialComponent, outlet: 'products' },
      { path: 'rollers', component: RollersComponent, outlet: 'products' },
      { path: 'disks', component: DisksComponent, outlet: 'products' },
      { path: 'parts', component: PartsComponent, outlet: 'products' },
      { path: 'tools', component: ToolsComponent, outlet: 'products' },
    ],
  },
  { path: 'projects', component: ProjectsComponent },
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
  { path: 'home', component: HomeComponent },
  { path: 'news', component: MdbNewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'awards', component: AwardsComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations: [
    keyValueFilterPipe,
    ProductsComponent,
    ProjectsComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    HomeComponent,
    AppComponent,
    PloughsComponent,
    DisksComponent,
    CultivatorsComponent,
    RollersComponent,
    ShreddersComponent,
    SpecialComponent,
    PartsComponent,
    ToolsComponent,
    RippersComponent,
    AboutComponent,
    HistoryComponent,
    AwardsComponent,
    AccordionComponent,
    CategoryComponent,
    AdminComponent,
    EditPloughsComponent,
    AddPloughComponent,
    PloughControlsComponent,
    ProductTableComponent,
    AddCategoryComponent,
    MdbFooterComponent,
    MdbNewsComponent,
    MdbAccordionComponent,
    MdbTableComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AccordionModule,
    TableModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTablesModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [FireService],
  bootstrap: [AppComponent],
})
export class AppModule {}
