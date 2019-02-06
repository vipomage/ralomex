import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../../tools/services/fire.service';

@Component({
  selector: 'app-edit-ploughs',
  templateUrl: './edit-ploughs.component.html',
  styleUrls: ['./edit-ploughs.component.css'],
})
export class EditPloughsComponent implements OnInit {
  category: String;
  categories: String[];
  data;
  constructor(private db: FireService) {}

  onCategoryChange = (selectValue: String) => {
    this.category = selectValue;
    this.db.getType('ploughs/'+selectValue).subscribe(res=>{
      this.data= res['collection'];
    })
  };

  ngOnInit() {
    this.db.getType(`ploughs`).subscribe(res=>{
      this.categories = Object.keys(res);
    })
  }
}
