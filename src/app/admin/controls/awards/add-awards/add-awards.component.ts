import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../../../tools/services/image.service';
import { FireService } from '../../../../../tools/services/fire.service';
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;
import {Award} from "../../../../../tools/interfaces/award";

@Component({
  selector: 'app-add-awards',
  templateUrl: './add-awards.component.html',
  styleUrls: ['./add-awards.component.css'],
})
export class AddAwardsComponent implements OnInit {

  image:string;
  preventEdit = this.imgService.preventEdit;

  constructor(
    public imgService: ImageService,
    private db: FireService) {}


  startUpload = (files:FileList) => {
    this.imgService
      .prepToUploadSingle(files, 'awards')
      .then((taskSnap: UploadTaskSnapshot) => {
        taskSnap.ref.getDownloadURL().then((imgUlr: string) => {
          this.image = imgUlr;
          this.imgService.preventEdit = false;
        });
      });
  };

  saveAwardElement = (formData: Award) => {
    formData.image= this.image;
    this.db.AwardsControls.addAwardElement(formData).then(()=>{
      //todo
      // saved notification
      // clear Form
    });
  };

  ngOnInit() {}
}
