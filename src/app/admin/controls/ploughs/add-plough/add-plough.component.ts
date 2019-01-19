import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../fire.service';
import { Plough } from '../../../../interfaces/plough';

@Component({
  selector: 'app-add-plough',
  templateUrl: './add-plough.component.html',
  styleUrls: ['./add-plough.component.css'],
})
export class AddPloughComponent implements OnInit {

  categories: String[];
  category: String;
  plough: Plough;

  constructor(private db: FireService) {}

  onCategoryChange = selectValue => (this.category = selectValue);

  savePlough = (data: Plough, category: String) =>
    this.db.addPlough(data, category);

  ngOnInit() {

    this.db.getCategory('ploughs').subscribe(data => {
      this.category = Object.keys(data)[0];
      this.categories = Object.keys(data);
    });
  }
}
