import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../../tools/services/fire.service';

@Component({
  selector: 'app-edit-ploughs',
  templateUrl: './edit-ploughs.component.html',
  styleUrls: ['./edit-ploughs.component.css'],
})
export class EditPloughsComponent implements OnInit {
  category: string;
  categories: string[];
  series: string[];
  set: string;
  setData: string;
  ploughList;
  data;
  constructor(private db: FireService) {}

  onCategoryChange = (selectValue: string) => {
    this.set = null;
    this.series = null;
    this.ploughList = null;
    
    this.category = selectValue;
    this.db.getType('ploughs/types/' + selectValue).subscribe(res => {
      this.data = res['series'];
      this.series = Object.keys(res['series']);
    });
  };

  onSetChange = (selectValue: string) => {
    this.set = selectValue;
    this.setData = this.data[this.set];
    this.ploughList = this.data[selectValue]['collection'];
  };

  ngOnInit() {
    this.db.getType(`ploughs`).subscribe((res: any) => {
      this.categories = Object.keys(res.types);
    });
  }
}
