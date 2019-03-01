import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../../tools/services/fire.service';
import { ImageService } from '../../../../../tools/services/image.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  initial;
  images: string[] = this.imgService.images;
  categories: string[];
  category: string;

  constructor(public db: FireService, public imgService: ImageService) {}

  change = selectValue => {
    this.category = selectValue;
  };

  addPloughCategory = categoryDetails => {
    categoryDetails.value.image = this.images;
    return this.db.addPloughCategory(this.category, categoryDetails.value);
  };

  startUpload = event => this.imgService.startUpload(event);

  ngOnInit() {
    this.db.getType('ploughs').subscribe(response => {
      this.categories = Object.keys(response['types']);
      this.category = this.categories[0];
    });
  }
}
