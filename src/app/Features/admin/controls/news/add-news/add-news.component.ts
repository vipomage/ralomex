import { Component } from '@angular/core';
import { ImageService } from '../../../../../tools/services/image.service';
import { News } from '../../../../../tools/interfaces/news';
import { FireService } from '../../../../../tools/services/fire.service';
import { DbLocation } from '../../../../../tools/interfaces/DatabaseSchema';
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
})
export class AddNewsComponent {
  image: string = this.imgService.downloadUrl;
  preventEdit = this.imgService.preventEdit;

  constructor(public imgService: ImageService, private db: FireService) {}

  startUpload = (files: FileList) => {
    this.imgService.prepToUploadSingle(files, 'news').then((taskSnap: UploadTaskSnapshot) => {
      taskSnap.ref.getDownloadURL().then((imgUlr: string) => {
        this.image = imgUlr;
        this.imgService.preventEdit = false;
      });
    });
  };

  saveNewsElement = (formData: News) => {
    formData.timeStamp = Date.now();
    formData.image = this.image;
    this.db.AdminUtils.addElement(formData, DbLocation.NEWS).then(() => {
      //todo
      // saved notification
      // clear Form
    });
  };
}
