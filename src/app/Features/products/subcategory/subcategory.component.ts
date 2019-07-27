import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../../../Tools/services/fire.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css'],
})
export class SubcategoryComponent implements OnInit {
  private type: string;
  private category: string;
  private subCategory: string;
  public data;

  constructor(private activeRoute: ActivatedRoute, private db: FireService) {}

  ngOnInit() {
    this.type = this.activeRoute.snapshot.params.type;
    this.category = this.activeRoute.snapshot.params.category;
    this.subCategory = this.activeRoute.snapshot.params.subCategory;
    
    this.db.getseriesData(this.type, this.category, this.subCategory).subscribe(data => {
      this.data = data;
    });
  }
}
