import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../../../Tools/services/fire.service';

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.component.html',
  styleUrls: ['./category-overview.component.scss'],
})
export class CategoryOverviewComponent implements OnInit {
  productType;
  series:string[];
  headers:string[];
  data;
  constructor(private activeRoute: ActivatedRoute, private db: FireService) {}

  async ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    this.data = await this.db.getSubCategories(params.type,params.category).toPromise();
    this.series = Object.keys(this.data);
    this.productType = params.type;
  }
}
