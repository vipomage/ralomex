import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../tools/pipes/pipes.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { MdbEditableTableComponent } from './controls/mdb-editable-table/mdb-editable-table.component';
import { adminRoutes } from './admin.routing';
import { ProductAddDialog } from './product-add-dialog/product-add-dialog.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatProgressBarModule,
  MatSelectModule,
  MatTabsModule, MatTooltipModule,
} from '@angular/material';
import { TeamDialogComponent } from './about/team-dialog/team-dialog.component';
import { AdminExpositionsComponent } from './about/admin-expositions/admin-expositions.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ExpoPreviewDialogComponent } from './about/admin-expositions/expo-preview-dialog/expo-preview-dialog.component';
import { InnovationsDialogComponent } from './about/admin-expositions/innovations-dialog/innovations-dialog.component';
import { AdminCertificateComponent } from './about/admin-certificate/admin-certificate.component';
import { TranslateModule } from '@ngx-translate/core';
import { AdminEditItemComponent } from './edit-item/admin-edit-item.component';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { SharedModule } from '../../Shared/shared.module';
import { AddImageDialogComponent } from './add-image-dialog/add-image-dialog.component';

@NgModule({
  entryComponents: [
    ProductAddDialog,
    TeamDialogComponent,
    AdminExpositionsComponent,
    ExpoPreviewDialogComponent,
    InnovationsDialogComponent,
    AdminCertificateComponent,
    AddImageDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    MDBBootstrapModule.forRoot(),
    AngularEditorModule,
    FormsModule,
    PipesModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTabsModule,
    TranslateModule,
    SharedModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  declarations: [
    AdminComponent,
    PloughControlsComponent,
    EditPloughsComponent,
    AddPloughComponent,
    AddCategoryComponent,
    HomeControlsComponent,
    AddHomeComponent,
    EditHomeComponent,
    AwardsControlsComponent,
    AddAwardsComponent,
    EditAwardsComponent,
    NewsControlComponent,
    AddNewsComponent,
    EditNewsComponent,
    ProjectsControlComponent,
    AddProjectsComponent,
    EditProjectsComponent,
    MdbEditableTableComponent,
    ProductAddDialog,
    TeamDialogComponent,
    AdminExpositionsComponent,
    ExpoPreviewDialogComponent,
    InnovationsDialogComponent,
    AdminCertificateComponent,
    AdminEditItemComponent,
    EditableTableComponent,
    AddImageDialogComponent,
  ],
  exports: [RouterModule],
})
export class AdminModule {}
