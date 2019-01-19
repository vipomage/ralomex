import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../fire.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  constructor(private db: FireService) {}

  addPloughCategory = (category, categoryDetails) =>
    this.db.addPloughCategory(category, categoryDetails);

  ngOnInit() {}
}
