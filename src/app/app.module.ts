import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// noinspection ES6UnusedImports
import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { keyValueFilterPipe } from '../tools/pipes/key-value-filter.pipe';
import { objectSplitToArray } from '../tools/pipes/split-array.pipe';
import { ArraySortPipe} from '../tools/pipes/array-sort.pipe';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FireService } from '../tools/services/fire.service';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

import { NgModule } from '@angular/core';
import { ProjectsControlComponent } from './admin/controls/projects/projects-control/projects-control.component';
import { PloughControlsComponent } from './admin/controls/ploughs/plough-controls/plough-controls.component';
import { RemoveProjectsComponent } from './admin/controls/projects/remove-projects/remove-projects.component';
import { AwardsControlsComponent } from './admin/controls/awards/awards-controls/awards-controls.component';
import { EditProjectsComponent } from './admin/controls/projects/edit-projects/edit-projects.component';
import { RemoveAwardsComponent } from './admin/controls/awards/remove-awards/remove-awards.component';
import { AddProjectsComponent } from './admin/controls/projects/add-projects/add-projects.component';
import { EditPloughsComponent } from './admin/controls/ploughs/edit-ploughs/edit-ploughs.component';
import { AddCategoryComponent } from './admin/controls/ploughs/add-category/add-category.component';
import { HomeControlsComponent } from './admin/controls/home/home-controls/home-controls.component';
import { NewsControlComponent } from './admin/controls/news/news-control/news-control.component';
import { EditAwardsComponent } from './admin/controls/awards/edit-awards/edit-awards.component';
import { AddPloughComponent } from './admin/controls/ploughs/add-plough/add-plough.component';
import { AddAwardsComponent } from './admin/controls/awards/add-awards/add-awards.component';
import { AccordionComponent } from './products/accordion_DEPRECATED/accordion.component';
import { EditHomeComponent } from './admin/controls/home/edit-home/edit-home.component';
import { EditNewsComponent } from './admin/controls/news/edit-news/edit-news.component';
import { AddNewsComponent } from './admin/controls/news/add-news/add-news.component';
import { AddHomeComponent } from './admin/controls/home/add-home/add-home.component';
import { MdbAccordionComponent } from './products/mdb-accordion/mdb-accordion.component';
import { ProductTableComponent } from './products/product-table/product-table.component';
import { CultivatorsComponent } from './products/cultivators/cultivators.component';
import { SubcategoryComponent } from './products/subcategory/subcategory.component';
import { ShreddersComponent } from './products/shredders/shredders.component';
import { MdbCardComponent } from './mdb-card_DEPRECATED/mdb-card.component';
import { MdbJumbotronComponent } from './mdb-jumbotron/mdb-jumbotron.component';
import { CategoryComponent } from './products/category/category.component';
import { MdbCarouselComponent } from './mdb-carousel/mdb-carousel.component';
import { MdbTableComponent } from './admin/mdb-table/mdb-table.component';
import { MdbSectionComponent } from './mdb-section/mdb-section.component';
import { ProductComponent } from './products/product/product.component';
import { PloughsComponent } from './products/ploughs/ploughs.component';
import { RollersComponent } from './products/rollers/rollers.component';
import { SpecialComponent } from './products/special/special.component';
import { RippersComponent } from './products/rippers/rippers.component';
import { FooterComponent } from './footer_DEPRECATED/footer.component';
import { MdbFooterComponent } from './mdb-footer/mdb-footer.component';
import { DisksComponent } from './products/disks/disks.component';
import { PartsComponent } from './products/parts/parts.component';
import { ToolsComponent } from './products/tools/tools.component';
import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './projects/projects.component';
import { MdbNewsComponent } from './mdb-news/mdb-news.component';
import { HistoryComponent } from './history/history.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AwardsComponent } from './awards/awards.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { routes } from './routes';

@NgModule({
  declarations: [
    ProjectsControlComponent,
    PloughControlsComponent,
    AwardsControlsComponent,
    RemoveProjectsComponent,
    MdbAccordionComponent,
    ProductTableComponent,
    RemoveAwardsComponent,
    MdbJumbotronComponent,
    EditProjectsComponent,
    HomeControlsComponent,
    EditPloughsComponent,
    AddCategoryComponent,
    CultivatorsComponent,
    NewsControlComponent,
    SubcategoryComponent,
    MdbCarouselComponent,
    AddProjectsComponent,
    MdbSectionComponent,
    EditAwardsComponent,
    keyValueFilterPipe,
    objectSplitToArray,
    ArraySortPipe,
    ShreddersComponent,
    AccordionComponent,
    AddAwardsComponent,
    AddPloughComponent,
    MdbFooterComponent,
    EditNewsComponent,
    ProjectsComponent,
    ProductsComponent,
    CategoryComponent,
    MdbTableComponent,
    EditHomeComponent,
    ProductComponent,
    MdbCardComponent,
    AddNewsComponent,
    PloughsComponent,
    RollersComponent,
    SpecialComponent,
    RippersComponent,
    HistoryComponent,
    MdbNewsComponent,
    AddHomeComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    AwardsComponent,
    DisksComponent,
    PartsComponent,
    ToolsComponent,
    AboutComponent,
    AdminComponent,
    HomeComponent,
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }),
    AngularFireModule.initializeApp(environment.firebase),
    MDBBootstrapModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    AccordionModule,
    BrowserModule,
    TableModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [FireService],
})
export class AppModule {}
