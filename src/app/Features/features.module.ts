import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureRoutes } from './features.routing';
import { ProductsModule } from './products/products.module';
import { AdminModule } from './admin/admin.module';
import { AwardsComponent } from './about-us/awards/awards.component';
import { HistoryComponent } from './about-us/history/history.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './about-us/projects/projects.component';
import { PipesModule } from '../tools/pipes/pipes.module';
import { CarouselModule } from 'angular-bootstrap-md';
import { TheTeamComponent } from './about-us/the-team/the-team.component';
import { AboutInnovationsComponent } from './about-us/about-innovations/about-innovations.component';
import { MatButtonModule, MatTooltipModule } from '@angular/material';
import { TeamCardComponent } from './about-us/the-team/team-card/team-card.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AwardsComponent,
    HistoryComponent,
    HomeComponent,
    ProjectsComponent,
    TheTeamComponent,
    AboutInnovationsComponent,
    TeamCardComponent,
    NewsComponent
  ],
  imports: [
    RouterModule.forChild(featureRoutes),
    CommonModule,
    ProductsModule,
    AdminModule,
    PipesModule,
    CarouselModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class FeaturesModule {}
