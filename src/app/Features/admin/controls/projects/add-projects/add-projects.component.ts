import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../../../tools/services/image.service';
import { FireService } from '../../../../../tools/services/fire.service';
import { Project } from '../../../../../tools/interfaces/project';
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css'],
})
export class AddProjectsComponent implements OnInit {
  constructor(public imgService: ImageService, private db: FireService) {}

  image: string;
  preventEdit = this.imgService.preventEdit;

  startUpload = (files: FileList) => {
    this.imgService.prepToUploadSingle(files, 'projects').then((taskSnap: UploadTaskSnapshot) => {
      taskSnap.ref.getDownloadURL().then((imgUlr: string) => {
        this.image = imgUlr;
        this.imgService.preventEdit = false;
      });
    });
  };

  saveProjectElement = (formData: Project) => {
    if (this.image) {
      formData.image = this.image;
    } else {
      delete formData.image;
    }
    this.db.AdminUtils.addElement(formData, 'projects').then(() => {
      //todo
      // saved notification
      // clear Form
    });
  };

  ngOnInit() {}
}
