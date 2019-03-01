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
  categories: string[];
  category: string;
  subCategories: string[];
  subCategory: string;
  images: string[] = this.imgService.images;

  constructor(public db: FireService, public imgService: ImageService) {}

  onCategoryChange = selectValue => {
    this.category = selectValue;
    this.db.getSubCategories('ploughs', selectValue).subscribe(data => {
      this.subCategory = Object.keys(data)[0];
      this.subCategories = Object.keys(data);
    });
  };

  onSubCategoryChange = selectValue => {
    this.subCategory = selectValue;
  };

  savePlough = (data: Plough, category: string) => {
    data.image = this.images;
    this.db.addPlough(data, category, this.subCategory);
    //todo notification
  };

  startUpload = event => this.imgService.startUpload(event);

  ngOnInit() {
    this.db.getType('ploughs/types').subscribe(data => {
      this.category = Object.keys(data)[0];
      this.categories = Object.keys(data);

      this.db.getSubCategories('ploughs', this.category).subscribe(data => {
        this.subCategory = Object.keys(data)[0];
        this.subCategories = Object.keys(data);
      });
    });
  }
}
