import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../../tools/services/fire.service';
import { PloughCategory } from '../../../../../tools/interfaces/plough-category';

@Component({
  selector: 'app-plough-controls',
  templateUrl: './plough-controls.component.html',
  styleUrls: ['./plough-controls.component.css'],
})
export class PloughControlsComponent implements OnInit {
  category: String;
  categoryDetails: PloughCategory;
  constructor(private db: FireService) {}

  addCategory = (category: String, categoryDetails: PloughCategory) =>
    this.db.addPloughCategory(category, categoryDetails);

  ngOnInit() {}
}
