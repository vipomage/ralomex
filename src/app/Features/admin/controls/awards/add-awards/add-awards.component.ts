import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../../../Tools/services/image.service';
import { Award } from '../../../../../Tools/interfaces/award';
import { FireService } from '../../../../../Tools/services/fire.service';
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;

@Component({
  selector: 'app-add-awards',
  templateUrl: './add-awards.component.html',
  styleUrls: ['./add-awards.component.css'],
})
export class AddAwardsComponent implements OnInit {
  image: string;
  preventEdit = this.imgService.preventEdit;

  constructor(public imgService: ImageService, private db: FireService) {}

  startUpload = (files: FileList) => {
    this.imgService.prepToUploadSingle(files, 'awards').then((taskSnap: UploadTaskSnapshot) => {
      taskSnap.ref.getDownloadURL().then((imgUlr: string) => {
        this.image = imgUlr;
        this.imgService.preventEdit = false;
      });
    });
  };

  saveAwardElement = (formData: Award) => {
    formData.image = this.image;
    this.db.AdminUtils.addElement(formData, 'awards').then(() => {
      //todo
      // saved notification
      // clear Form
    });
  };

  ngOnInit() {}
}
