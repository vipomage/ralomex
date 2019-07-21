import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productsRouting } from './products.routing';
import { CategoryComponent } from './category/category.component';
import { CultivatorsComponent } from './cultivators/cultivators.component';
import { DisksComponent } from './disks/disks.component';
import { MdbAccordionComponent } from './mdb-accordion/mdb-accordion.component';
import { PartsComponent } from './parts/parts.component';
import { PloughsComponent } from './ploughs/ploughs.component';
import { ProductComponent } from './product/product.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { RippersComponent } from './rippers/rippers.component';
import { RollersComponent } from './rollers/rollers.component';
import { ShreddersComponent } from './shredders/shredders.component';
import { SpecialComponent } from './special/special.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ToolsComponent } from './tools/tools.component';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../Shared/shared.module';
import { CardsFreeModule } from 'angular-bootstrap-md';
import { PipesModule } from '../../Tools/pipes/pipes.module';
import { CategoryOverviewComponent } from './category-overview/category-overview.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CategoryComponent,
    CultivatorsComponent,
    DisksComponent,
    MdbAccordionComponent,
    PartsComponent,
    PloughsComponent,
    ProductComponent,
    ProductTableComponent,
    RippersComponent,
    RollersComponent,
    ShreddersComponent,
    SpecialComponent,
    SubcategoryComponent,
    ToolsComponent,
    CategoryOverviewComponent,
  ],
  imports: [
    RouterModule.forChild(productsRouting),
    CommonModule,
    SharedModule,
    CardsFreeModule,
    PipesModule,
  ],
  exports: [
    ProductsComponent,
    CategoryComponent,
    CultivatorsComponent,
    DisksComponent,
    MdbAccordionComponent,
    PartsComponent,
    PloughsComponent,
    ProductComponent,
    ProductTableComponent,
    RippersComponent,
    RollersComponent,
    ShreddersComponent,
    SpecialComponent,
    SubcategoryComponent,
    ToolsComponent,
  ],
})
export class ProductsModule {}
