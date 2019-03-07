import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// noinspection ES6UnusedImports
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FireService } from './tools/services/fire.service';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PipesModule } from './tools/pipes/pipes.module';
import { AdminModule } from './admin/admin.module';
import { routes } from './app-routes';

import { NgModule } from '@angular/core';
import { AccordionComponent } from './products/accordion_DEPRECATED/accordion.component';
import { MdbAccordionComponent } from './products/mdb-accordion/mdb-accordion.component';
import { ProductTableComponent } from './products/product-table/product-table.component';
import { CultivatorsComponent } from './products/cultivators/cultivators.component';
import { SubcategoryComponent } from './products/subcategory/subcategory.component';
import { ShreddersComponent } from './products/shredders/shredders.component';
import { MdbCardComponent } from './mdb-card_DEPRECATED/mdb-card.component';
import { MdbJumbotronComponent } from './mdb-jumbotron/mdb-jumbotron.component';
import { CategoryComponent } from './products/category/category.component';
import { MdbCarouselComponent } from './mdb-carousel/mdb-carousel.component';
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
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    MdbAccordionComponent,
    ProductTableComponent,
    MdbJumbotronComponent,
    CultivatorsComponent,
    SubcategoryComponent,
    MdbCarouselComponent,
    MdbSectionComponent,
    ShreddersComponent,
    AccordionComponent,
    MdbFooterComponent,
    ProjectsComponent,
    ProductsComponent,
    CategoryComponent,
    ProductComponent,
    MdbCardComponent,
    PloughsComponent,
    RollersComponent,
    SpecialComponent,
    RippersComponent,
    HistoryComponent,
    MdbNewsComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    AwardsComponent,
    DisksComponent,
    PartsComponent,
    ToolsComponent,
    AboutComponent,
    HomeComponent,
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }),
    AngularFireModule.initializeApp(environment.firebase),
    MDBBootstrapModule.forRoot(),
    AdminModule,
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
    PipesModule,
  ],

  bootstrap: [AppComponent],
  providers: [FireService],
  exports:[RouterModule]
})
export class AppModule {}
