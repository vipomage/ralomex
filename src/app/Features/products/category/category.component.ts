import { Component, Input, OnInit } from '@angular/core';
import { FireService } from '../../../Tools/services/fire.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() category;
  data;
  categories: string[];

  constructor(private db: FireService) {
    //todo FIX TYPE!
  }

  ngOnInit() {
    this.db.getType(this.category).subscribe(response => {
      this.data = response;
      debugger;
      this.categories = Object.keys(response['types']);
    });
  }
}
