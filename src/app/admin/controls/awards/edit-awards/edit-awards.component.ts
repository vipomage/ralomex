import { Component, OnInit } from '@angular/core';
import { FireService, IUnion } from '../../../../tools/services/fire.service';
import { ImageService } from '../../../../tools/services/image.service';
import { Award } from '../../../../tools/interfaces/award';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-awards',
  templateUrl: './edit-awards.component.html',
  styleUrls: ['./edit-awards.component.css'],
})
export class EditAwardsComponent implements OnInit {
  constructor(private db: FireService, private imgService: ImageService) {}

  elements: Observable<IUnion> = this.db.AdminUtils.getElements('awards');
  awardElementId: string;
  awardElement: Award;

  setElement = (id: string, element: Award): void => {
    this.awardElementId = id;
    this.awardElement = element;
  };

  deleteElement = (elementId: string) => {
    let confirm = window.confirm(
      'Сигурни ли сте че искате да изтриете тази новина!'
    );
    if (confirm) {
      window.document.getElementById(elementId).remove();
      return this.db.AdminUtils.deleteElementById(elementId, 'awards');
    }
  };

  startUpload = files => {
    try {
      this.imgService.images = [];
      this.imgService.startUpload(files);
      this.awardElement.image = this.imgService.images;
    } catch (e) {
      console.log(e.message);
      this.imgService.preventEdit = false;
    }
  };

  editAwardElement = (id: string, formData: Award) => {
    if (this.imgService.images.length > 0) {
      formData.image = this.imgService.images[0];
    } else {
      if (this.awardElement.image)
        formData.image = this.awardElement.image as string;
    }

    return this.db.AdminUtils.updateElementById(id, 'awards', formData);
  };

  ngOnInit() {}
}
