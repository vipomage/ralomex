import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../../tools/services/fire.service';
import { Plough } from '../../../../../tools/interfaces/plough';
import { ImageService } from '../../../../../tools/services/image.service';

@Component({
  selector: 'app-add-plough',
  templateUrl: './add-plough.component.html',
  styleUrls: ['./add-plough.component.css'],
})
export class AddPloughComponent implements OnInit {

  categories: String[];
  category: String;
  plough: Plough;
  images: String[] = this.imgService.images;

  constructor(public db: FireService,public imgService:ImageService) {}

  onCategoryChange = selectValue => (this.category = selectValue);

  savePlough = (data: Plough, category: String) =>{
    data.images = this.images;
    this.db.addPlough(data, category);
  };



  startUpload = event => this.imgService.startUpload(event);


  ngOnInit() {

    this.db.getCategory('ploughs').subscribe(data => {
      this.category = Object.keys(data)[0];
      this.categories = Object.keys(data);
    });
  }
}
