import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PloughControlsComponent } from './controls/ploughs/plough-controls/plough-controls.component';
import { EditPloughsComponent } from './controls/ploughs/edit-ploughs/edit-ploughs.component';
import { AddPloughComponent } from './controls/ploughs/add-plough/add-plough.component';
import { AddCategoryComponent } from './controls/ploughs/add-category/add-category.component';
import { HomeControlsComponent } from './controls/home/home-controls/home-controls.component';
import { AddHomeComponent } from './controls/home/add-home/add-home.component';
import { EditHomeComponent } from './controls/home/edit-home/edit-home.component';
import { AwardsControlsComponent } from './controls/awards/awards-controls/awards-controls.component';
import { AddAwardsComponent } from './controls/awards/add-awards/add-awards.component';
import { EditAwardsComponent } from './controls/awards/edit-awards/edit-awards.component';
import { NewsControlComponent } from './controls/news/news-control/news-control.component';
import { AddNewsComponent } from './controls/news/add-news/add-news.component';
import { EditNewsComponent } from './controls/news/edit-news/edit-news.component';
import { ProjectsControlComponent } from './controls/projects/projects-control/projects-control.component';
import { AddProjectsComponent } from './controls/projects/add-projects/add-projects.component';
import { EditProjectsComponent } from './controls/projects/edit-projects/edit-projects.component';

export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'ploughs',
        component: PloughControlsComponent,
        outlet: 'admin',
        children: [
          { path: 'edit', component: EditPloughsComponent, outlet: 'controls' },
          { path: 'add', component: AddPloughComponent, outlet: 'controls' },
          {
            path: 'addCategory',
            component: AddCategoryComponent,
            outlet: 'controls',
          },
        ],
      },
      {
        path: 'home',
        component: HomeControlsComponent,
        outlet: 'admin',
        children: [
          { path: 'add', component: AddHomeComponent, outlet: 'controls' },
          { path: 'edit', component: EditHomeComponent, outlet: 'controls' },
        ],
      },
      {
        path: 'awards',
        component: AwardsControlsComponent,
        outlet: 'admin',
        children: [
          { path: 'add', component: AddAwardsComponent, outlet: 'controls' },
          { path: 'edit', component: EditAwardsComponent, outlet: 'controls' },
        ],
      },
      {
        path: 'news',
        component: NewsControlComponent,
        outlet: 'admin',
        children: [
          { path: 'add', component: AddNewsComponent, outlet: 'controls' },
          { path: 'edit', component: EditNewsComponent, outlet: 'controls' },
        ],
      },
      {
        path: 'projects',
        component: ProjectsControlComponent,
        outlet: 'admin',
        children: [
          { path: 'add', component: AddProjectsComponent, outlet: 'controls' },
          {
            path: 'edit',
            component: EditProjectsComponent,
            outlet: 'controls',
          },
        ],
      },
    ],
  },
];
