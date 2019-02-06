import { Component, Input, OnInit } from '@angular/core';
import { FireService } from '../../../tools/services/fire.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {

  @Input() category;
  private data;
  private categories:String[];

  constructor(private db: FireService) {}

  ngOnInit() {
    this.db.getType(this.category).subscribe(response => {
      this.data = response;
      this.categories = Object.keys(response['types']);
    });
    console.log(this.category)
  }
}
