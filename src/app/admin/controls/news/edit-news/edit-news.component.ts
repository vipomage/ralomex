import { Component, OnInit } from '@angular/core';
import { News } from '../../../../../tools/interfaces/news';
import { FireService } from '../../../../../tools/services/fire.service';
import {ImageService} from "../../../../../tools/services/image.service";

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css'],
})
export class EditNewsComponent implements OnInit {
  elements: News[];
  newsElementId: string;
  newsElement: News;

  constructor(private db: FireService,private imgService:ImageService) {}

  setElement = (id: string, element: News): void => {
    this.newsElementId = id;
    this.newsElement = element;
  };

  deleteElement = (elementId: string) => {
    let confirm = window.confirm('Сигурни ли сте че искате да изтриете тази новина!');
    if (confirm) {
      window.document.getElementById(elementId).remove();
      return this.db.NewsControls.deleteNewsElement(elementId);
    }
  };

  startUpload = (files) =>{
    try {
      this.imgService.images = [];
      this.imgService.startUpload(files);
      this.newsElement.image = this.imgService.images
    }catch (e) {
      console.log(e.message);
      this.imgService.preventEdit = false;
    }
  };

  editNewsElement = (id: string, formData: News) => {
    if (this.imgService.images.length>0) {
      formData.image = this.imgService.images[0];
    }else{
      if (this.newsElement.image)
      formData.image = this.newsElement.image as string;
    }

    return this.db.NewsControls.updateNewsElement(id, formData);
  };

  ngOnInit() {
    this.db.NewsControls.getNewsElements().subscribe((data: News[]) => (this.elements = data));
  }
}
