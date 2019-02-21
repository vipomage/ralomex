import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FireService } from '../tools/services/fire.service';

import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './projects/projects.component';
import { PloughsComponent } from './products/ploughs/ploughs.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
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
import { CategoryComponent } from './products/category/category.component';
import { AdminComponent } from './admin/admin.component';
import { EditPloughsComponent } from './admin/controls/ploughs/edit-ploughs/edit-ploughs.component';
import { AddPloughComponent } from './admin/controls/ploughs/add-plough/add-plough.component';
import { PloughControlsComponent } from './admin/controls/ploughs/plough-controls/plough-controls.component';
import { ProductTableComponent } from './products/product-table/product-table.component';
import { AddCategoryComponent } from './admin/controls/ploughs/add-category/add-category.component';
import { MdbFooterComponent } from './mdb-footer/mdb-footer.component';
import { MdbNewsComponent } from './mdb-news/mdb-news.component';
import { MdbAccordionComponent } from './products/mdb-accordion/mdb-accordion.component';
import { MdbTableComponent } from './admin/mdb-table/mdb-table.component';
import { DataTablesModule } from 'angular-datatables';
import { MdbJumbotronComponent } from './mdb-jumbotron/mdb-jumbotron.component';
import { SubcategoryComponent } from './products/subcategory/subcategory.component';
import { ProductComponent } from './products/product/product.component';
import { MdbSectionComponent } from './mdb-section/mdb-section.component';
import { AccordionComponent } from './products/accordion_DEPRECATED/accordion.component';
import { FooterComponent } from './footer_DEPRECATED/footer.component';
import { MdbCarouselComponent } from './mdb-carousel/mdb-carousel.component';

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
import { MdbCardComponent } from './mdb-card_DEPRECATED/mdb-card.component';

import { routes } from './routes';
import { AddNewsComponent } from './admin/controls/news/add-news/add-news.component';
import { AddAwardsComponent } from './admin/controls/awards/add-awards/add-awards.component';
import { AddProjectsComponent } from './admin/controls/projects/add-projects/add-projects.component';
import { AwardsControlsComponent } from './admin/controls/awards/awards-controls/awards-controls.component';
import { EditAwardsComponent } from './admin/controls/awards/edit-awards/edit-awards.component';
import { RemoveAwardsComponent } from './admin/controls/awards/remove-awards/remove-awards.component';
import { NewsControlComponent } from './admin/controls/news/news-control/news-control.component';
import { EditNewsComponent } from './admin/controls/news/edit-news/edit-news.component';
import { ProjectsControlComponent } from './admin/controls/projects/projects-control/projects-control.component';
import { EditProjectsComponent } from './admin/controls/projects/edit-projects/edit-projects.component';
import { RemoveProjectsComponent } from './admin/controls/projects/remove-projects/remove-projects.component';
import { HomeControlsComponent } from './admin/controls/home/home-controls/home-controls.component';
import { AddHomeComponent } from './admin/controls/home/add-home/add-home.component';
import { EditHomeComponent } from './admin/controls/home/edit-home/edit-home.component';

@NgModule({
  declarations: [
    keyValueFilterPipe,
    ProductsComponent,
    ProjectsComponent,
    HeaderComponent,
    NavbarComponent,
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
    MdbJumbotronComponent,
    SubcategoryComponent,
    ProductComponent,
    MdbSectionComponent,
    MdbCardComponent,
    AccordionComponent,
    FooterComponent,
    MdbCarouselComponent,
    AddNewsComponent,
    AddAwardsComponent,
    AddProjectsComponent,
    AwardsControlsComponent,
    EditAwardsComponent,
    RemoveAwardsComponent,
    NewsControlComponent,
    EditNewsComponent,
    ProjectsControlComponent,
    EditProjectsComponent,
    RemoveProjectsComponent,
    HomeControlsComponent,
    AddHomeComponent,
    EditHomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
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
    MDBBootstrapModule.forRoot(),
  ],
  providers: [FireService],
  bootstrap: [AppComponent],
})
export class AppModule {}
