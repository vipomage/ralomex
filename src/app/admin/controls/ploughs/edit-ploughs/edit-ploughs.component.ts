import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../tools/services/fire.service';

@Component({
  selector: 'app-edit-ploughs',
  templateUrl: './edit-ploughs.component.html',
  styleUrls: ['./edit-ploughs.component.css'],
})
export class EditPloughsComponent implements OnInit {
  category: string;
  categories: string[];
  subCategories: string[];
  subCategory: string;
  subCategoryData: string;
  ploughList;
  data;
  constructor(private db: FireService) {}

  onCategoryChange = (selectValue: string) => {
    //todo reset subCategory
    this.subCategory = null;
    this.subCategories = null;
    this.ploughList = null;

    this.category = selectValue;
    this.db.getType('ploughs/types/' + selectValue).subscribe(res => {
      this.data = res['collection'];
      this.subCategories = Object.keys(res['collection']);
    });
  };

  onSubCatChange = (selectValue: string) => {
    this.subCategory = selectValue;
    this.subCategoryData = this.data[this.subCategory];
    this.ploughList = this.data[selectValue]['collection'];
  };

  ngOnInit() {
    this.db.getType(`ploughs`).subscribe((res: any) => {
      this.categories = Object.keys(res.types);
    });
  }
}
