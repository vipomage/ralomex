import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../../../tools/services/fire.service';
import {
  BaseSchemaModel,
  ProductIUnion
} from '../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.component.html',
  styleUrls: ['./category-overview.component.scss'],
})
export class CategoryOverviewComponent implements OnInit {
  productType;
  series: string[];
  headers: string[];
  images?: string[];
  data;
  productData: BaseSchemaModel<ProductIUnion>;

  constructor(private activeRoute: ActivatedRoute, private db: FireService) {}

  async ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    this.productType = params.type;
    this.productData = await this.db.getProductDescriptionDetails(this.productType);
    this.data = this.productData.types[params.category].series;

    // Check if image prop is array to display carousel instead of single picture
    if (Array.isArray(this.productData.image)) {
      this.images = this.productData.image;
    }

    this.series = Object.keys(this.data);
  }
}
