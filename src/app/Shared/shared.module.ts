import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MdbCarouselComponent } from './mdb-carousel/mdb-carousel.component';
import { MdbFooterComponent } from './mdb-footer/mdb-footer.component';
import { MdbJumbotronComponent } from './mdb-jumbotron/mdb-jumbotron.component';
import { MdbSectionComponent } from './mdb-section/mdb-section.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../tools/pipes/pipes.module';
import { ProductTableComponent } from './productTables/product-table/product-table.component';
import { ProductTableDisksHeadersComponent } from './productTables/headers/product-table-disk-headers/product-table-disks-headers.component';
import { ProductTablePloughsHeadersComponent } from './productTables/headers/product-table-ploughs-headers/product-table-ploughs-headers.component';
import { ProductTableCultivatorsHeadersComponent } from './productTables/headers/product-table-cultivators-headers/product-table-cultivators-headers.component';
import { ProductTableRollersHeadersComponent } from './productTables/headers/product-table-rollers-headers/product-table-rollers-headers.component';
import { ProductTableShreddersHeadersComponent } from './productTables/headers/product-table-shredders-headers/product-table-shredders-headers.component';
import { ProductTableSprayersHeadersComponent } from './productTables/headers/product-table-sprayers-headers/product-table-sprayers-headers.component';
import { RalomexLogoComponent } from './ralomex-logo/ralomex-logo.component';
import { FixedContactPopupComponent } from './fixed-contact-popup/fixed-contact-popup.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MdbCarouselComponent,
    MdbFooterComponent,
    MdbJumbotronComponent,
    MdbSectionComponent,
    NavbarComponent,
    ProductTableComponent,
    ProductTableDisksHeadersComponent,
    ProductTablePloughsHeadersComponent,
    ProductTableCultivatorsHeadersComponent,
    ProductTableRollersHeadersComponent,
    ProductTableShreddersHeadersComponent,
    ProductTableSprayersHeadersComponent,
    RalomexLogoComponent,
    FixedContactPopupComponent,
  ],
  exports: [
    HeaderComponent,
    MdbCarouselComponent,
    MdbFooterComponent,
    MdbJumbotronComponent,
    MdbSectionComponent,
    NavbarComponent,
    
    ProductTableComponent,
    FixedContactPopupComponent,
  ],
  imports: [CommonModule, MDBBootstrapModule, RouterModule, PipesModule],
})
export class SharedModule {}
