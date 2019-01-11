import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './projects/projects.component';
import { PloughsComponent } from './products/ploughs/ploughs.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { DisksComponent } from './products/disks/disks.component';
import { CultivatorsComponent } from './products/cultivators/cultivators.component';
import { RollersComponent } from './products/rollers/rollers.component';
import { ShreddersComponent } from './products/shredders/shredders.component';
import { SpecialComponent } from './products/special/special.component';
import { PartsComponent } from './products/parts/parts.component';
import { ToolsComponent } from './products/tools/tools.component';
import { RippersComponent } from './products/rippers/rippers.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { AwardsComponent } from './awards/awards.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent,
    children: [
      { path: 'rippers', component: RippersComponent, outlet: 'products' },
      { path: 'cultivators', component: CultivatorsComponent, outlet: 'products'},
      { path: 'shredders', component: ShreddersComponent, outlet: 'products' },
      { path: 'ploughs', component: PloughsComponent, outlet: 'products' },
      { path: 'special', component: SpecialComponent, outlet: 'products' },
      { path: 'rollers', component: RollersComponent, outlet: 'products' },
      { path: 'disks', component: DisksComponent, outlet: 'products' },
      { path: 'parts', component: PartsComponent, outlet: 'products' },
      { path: 'tools', component: ToolsComponent, outlet: 'products' },
    ],
  },
  { path: 'projects', component: ProjectsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'awards', component: AwardsComponent },
];
@NgModule({
  declarations: [
    ProductsComponent,
    ProjectsComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    HomeComponent,
    AppComponent,
    PloughsComponent,
    DisksComponent,
    CultivatorsComponent,
    RollersComponent,
    ShreddersComponent,
    SpecialComponent,
    PartsComponent,
    ToolsComponent,
    RippersComponent,
    AboutComponent,
    HistoryComponent,
    AwardsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
