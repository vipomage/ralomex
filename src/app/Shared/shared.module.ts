import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MdbCarouselComponent } from './mdb-carousel/mdb-carousel.component';
import { MdbFooterComponent } from './mdb-footer/mdb-footer.component';
import { MdbJumbotronComponent } from './mdb-jumbotron/mdb-jumbotron.component';
import { MdbNewsComponent } from './mdb-news/mdb-news.component';
import { MdbSectionComponent } from './mdb-section/mdb-section.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { PloughTableComponent } from './productTables/plough-table/plough-table.component';
import { PipesModule } from '../Tools/pipes/pipes.module';
import { DisksTableComponent } from './productTables/disks-table/disks-table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MdbCarouselComponent,
    MdbFooterComponent,
    MdbJumbotronComponent,
    MdbNewsComponent,
    MdbSectionComponent,
    NavbarComponent,
    PloughTableComponent,
    DisksTableComponent,
  ],
  exports: [
    HeaderComponent,
    MdbCarouselComponent,
    MdbFooterComponent,
    MdbJumbotronComponent,
    MdbNewsComponent,
    MdbSectionComponent,
    NavbarComponent,
    PloughTableComponent,
    DisksTableComponent,
  ],
  imports: [CommonModule, MDBBootstrapModule, RouterModule, PipesModule],
})
export class SharedModule {}
