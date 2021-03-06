import { Component } from '@angular/core';
import { FireService } from '../../../../../tools/services/fire.service';
import { ImageService } from '../../../../../tools/services/image.service';
import { Observable } from 'rxjs';
import { Project } from '../../../../../tools/interfaces/project';
import { DbLocation, FirebaseResponseModel } from '../../../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css'],
})
export class EditProjectsComponent {
  constructor(private db: FireService, private imgService: ImageService) {}

  elements: Observable<FirebaseResponseModel> = this.db.AdminUtils.getElements(DbLocation.PROJECTS);
  projectElementId: string;
  projectElement: Project;

  setElement = (id: string, element: Project): void => {
    this.projectElementId = id;
    this.projectElement = element;
  };

  deleteElement = (elementId: string) => {
    let confirm = window.confirm('Сигурни ли сте че искате да изтриете тази новина!');
    if (confirm) {
      window.document.getElementById(elementId).remove();
      return this.db.AdminUtils.deleteElementById(elementId, DbLocation.PROJECTS);
    }
  };

  startUpload = files => {
    try {
      this.imgService.images = [];
      this.imgService.startUpload(files);
      this.projectElement.image = this.imgService.images;
    } catch (e) {
      console.log(e.message);
      this.imgService.preventEdit = false;
    }
  };

  editProjectElement = (id: string, formData: Project) => {
    if (this.imgService.images.length > 0) {
      formData.image = this.imgService.images[0];
    } else {
      if (this.projectElement.image) formData.image = this.projectElement.image as string;
    }

    return this.db.AdminUtils.updateElementById(id, 'projects', formData);
  };
}
