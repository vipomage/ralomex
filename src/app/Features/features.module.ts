import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureRoutes } from './features.routing';
import { ProductsModule } from './products/products.module';
import { AwardsComponent } from './about-us/awards/awards.component';
import { HistoryComponent } from './about-us/history/history.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './about-us/projects/projects.component';
import { PipesModule } from '../tools/pipes/pipes.module';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { TheTeamComponent } from './about-us/the-team/the-team.component';
import { AboutInnovationsComponent } from './about-us/about-innovations/about-innovations.component';
import { MatButtonModule, MatTooltipModule } from '@angular/material';
import { TeamCardComponent } from './about-us/the-team/team-card/team-card.component';
import { NewsComponent } from './news/news.component';
import { ExpositionsComponent } from './about-us/expositions/expositions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TranslateModule } from '@ngx-translate/core';
import { CertificatesComponent } from './about-us/certificates/certificates.component';
import { CertificateDialogComponent } from './about-us/certificates/certificate-dialog/certificate-dialog.component';
import { ExpoFullComponent } from './about-us/expositions/expo-full/expo-full.component';
import { NewsDialogComponent } from './news/news-dialog/news-dialog.component';

@NgModule({
  entryComponents: [CertificateDialogComponent,NewsDialogComponent],
  declarations: [
    AwardsComponent,
    HistoryComponent,
    HomeComponent,
    ProjectsComponent,
    TheTeamComponent,
    AboutInnovationsComponent,
    TeamCardComponent,
    NewsComponent,
    ExpositionsComponent,
    ContactsComponent,
    CertificatesComponent,
    CertificateDialogComponent,
    ExpoFullComponent,
    NewsDialogComponent,
  ],
  imports: [
    RouterModule.forChild(featureRoutes),
    CommonModule,
    ProductsModule,
    PipesModule,
    CarouselModule,
    MatButtonModule,
    MatTooltipModule,
    WavesModule,
    TranslateModule,
  ],
})
export class FeaturesModule {}
