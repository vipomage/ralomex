import { Component, Input, OnInit } from '@angular/core';
import { FireService } from '../../../Tools/services/fire.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() category;
  private _data;
  private categories: string[];

  constructor(private db: FireService) {
    //todo FIX TYPE!
  }

  public get data() {
    return this._data;
  }
  public set data(newValue) {
    this._data = newValue;
  }

  ngOnInit() {
    this.db.getType(this.category).subscribe(response => {
      this.data = response;
      this.categories = Object.keys(response['types']);
    });
  }
}
