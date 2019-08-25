import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureRoutes } from './features.routing';
import { ProductsModule } from './products/products.module';
import { AdminModule } from './admin/admin.module';
import { AboutComponent } from './about/about.component';
import { AwardsComponent } from './awards/awards.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PipesModule } from '../tools/pipes/pipes.module';
import { CarouselModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AboutComponent,
    AwardsComponent,
    HistoryComponent,
    HomeComponent,
    ProjectsComponent,
  ],
  imports: [
    RouterModule.forChild(featureRoutes),
    CommonModule,
    ProductsModule,
    AdminModule,
    PipesModule,
    CarouselModule,
  ],
})
export class FeaturesModule {}
