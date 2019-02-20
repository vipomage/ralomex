import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../../../../tools/services/image.service";
import {News} from "../../../../../tools/interfaces/news";
import {FireService} from "../../../../../tools/services/fire.service";

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  image: String|String[];

  constructor(
    private imgService:ImageService,
    private db:FireService
    ) { }

  startUpload = (files) =>{
    try {
      this.imgService.startUpload(files);
      this.image = this.imgService.images
    }catch (e) {
      console.log(e.message);
      this.imgService.preventEdit = false;
    }
  };

  saveNewsElement = (formData:News)=>{
    formData.timeStamp = Date.now();
    formData.image = this.imgService.images;
    this.db.NewsControls.addNewsElement(formData);
  };

  ngOnInit() {

  }

}
