import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../../tools/services/fire.service';
import { ImageService } from '../../../../../tools/services/image.service';
import { PloughCategory } from '../../../../../tools/interfaces/plough-category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  images: String[] = this.imgService.images;

  constructor(private db: FireService, private imgService: ImageService) {}

  addPloughCategory = (category, categoryDetails:PloughCategory) =>{
    categoryDetails.images = this.images;
    return this.db.addPloughCategory(category, categoryDetails);
  };


  ngOnInit() {}

  startUpload = event => this.imgService.startUpload(event);
}
