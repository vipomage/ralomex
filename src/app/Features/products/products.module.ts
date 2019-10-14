import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productsRouting } from './products.routing';
import { MdbAccordionComponent } from './mdb-accordion/mdb-accordion.component';
import { ProductComponent } from './product/product.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../Shared/shared.module';
import { CardsFreeModule, CarouselModule, TableModule } from 'angular-bootstrap-md';
import { PipesModule } from '../../tools/pipes/pipes.module';
import { CategoryOverviewComponent } from './category-overview/category-overview.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material';
import { SpecialsPageComponent } from './specials-page/specials-page.component';

@NgModule({
  declarations: [
    ProductsComponent,
    MdbAccordionComponent,
    ProductComponent,
    SubcategoryComponent,
    CategoryOverviewComponent,
    SpecialsPageComponent,
  ],
  imports: [
    RouterModule.forChild(productsRouting),
    CommonModule,
    SharedModule,
    CardsFreeModule,
    PipesModule,
    TableModule,
    TranslateModule,
    CarouselModule,
    MatTooltipModule,
  ],
  exports: [
    ProductsComponent,
    ProductComponent,
    SubcategoryComponent,
  ],
})
export class ProductsModule {}
