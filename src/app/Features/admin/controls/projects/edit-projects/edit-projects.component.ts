import { Component, OnInit } from '@angular/core';
import { FireService, IUnion } from '../../../../../Tools/services/fire.service';
import { ImageService } from '../../../../../Tools/services/image.service';
import { Observable } from 'rxjs';
import { Project } from '../../../../../Tools/interfaces/project';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css'],
})
export class EditProjectsComponent implements OnInit {
  constructor(private db: FireService, private imgService: ImageService) {}

  elements: Observable<IUnion> = this.db.AdminUtils.getElements('projects');
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
      return this.db.AdminUtils.deleteElementById(elementId, 'projects');
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

  ngOnInit() {}
}
