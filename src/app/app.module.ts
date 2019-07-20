import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FireService } from './Tools/services/fire.service';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PipesModule } from './Tools/pipes/pipes.module';
import { AdminModule } from './Features/admin/admin.module';
import { ToastrModule } from 'ngx-toastr';
import { routes } from './app-routes';

import { NgModule } from '@angular/core';
import { AccordionComponent } from './Features/products/accordion_DEPRECATED/accordion.component';
import { MdbAccordionComponent } from './Features/products/mdb-accordion/mdb-accordion.component';
import { ProductTableComponent } from './Features/products/product-table/product-table.component';
import { CultivatorsComponent } from './Features/products/cultivators/cultivators.component';
import { SubcategoryComponent } from './Features/products/subcategory/subcategory.component';
import { ShreddersComponent } from './Features/products/shredders/shredders.component';
import { MdbCardComponent } from './Shared/mdb-card_DEPRECATED/mdb-card.component';
import { MdbJumbotronComponent } from './Shared/mdb-jumbotron/mdb-jumbotron.component';
import { CategoryComponent } from './Features/products/category/category.component';
import { MdbCarouselComponent } from './Shared/mdb-carousel/mdb-carousel.component';
import { MdbSectionComponent } from './Shared/mdb-section/mdb-section.component';
import { ProductComponent } from './Features/products/product/product.component';
import { PloughsComponent } from './Features/products/ploughs/ploughs.component';
import { RollersComponent } from './Features/products/rollers/rollers.component';
import { SpecialComponent } from './Features/products/special/special.component';
import { RippersComponent } from './Features/products/rippers/rippers.component';
import { FooterComponent } from './Shared/footer_DEPRECATED/footer.component';
import { MdbFooterComponent } from './Shared/mdb-footer/mdb-footer.component';
import { DisksComponent } from './Features/products/disks/disks.component';
import { PartsComponent } from './Features/products/parts/parts.component';
import { ToolsComponent } from './Features/products/tools/tools.component';
import { ProductsComponent } from './Features/products/products.component';
import { ProjectsComponent } from './Features/projects/projects.component';
import { MdbNewsComponent } from './Shared/mdb-news/mdb-news.component';
import { HistoryComponent } from './Features/history/history.component';
import { HeaderComponent } from './Shared/header/header.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { AwardsComponent } from './Features/awards/awards.component';
import { AboutComponent } from './Features/about/about.component';
import { HomeComponent } from './Features/home/home.component';
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
    ToastrModule.forRoot(environment.toastr),
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
  exports: [RouterModule],
})
export class AppModule {}
