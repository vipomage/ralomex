import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireService } from '../../../tools/services/fire.service';
import { BaseSchemaModel, ProductIUnion } from '../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.component.html',
  styleUrls: ['./category-overview.component.scss'],
})
export class CategoryOverviewComponent implements OnInit {
  productType: string;
  category: string;
  series: string[];
  headers: string[];
  images?: string[];
  data;
  productData: BaseSchemaModel<ProductIUnion>;
  selectedSet: string;
  @ViewChildren('element') element: QueryList<any>;

  constructor(
    private activeRoute: ActivatedRoute,
    private db: FireService,
    private router: Router
  ) {}

  async ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    this.selectedSet = this.activeRoute.snapshot.params.set;
    this.productType = params.type;
    this.category = this.activeRoute.snapshot.params.category;
    this.productData = await this.db.getProductDescriptionDetails(this.productType);
    if (this.productData.types.hasOwnProperty(params.category)) {
      this.data = this.productData.types[params.category].series;
    } else {
      return await this.router.navigate(['/']);
    }

    // Check if image prop is array to display carousel instead of single picture
    if (Array.isArray(this.productData.image)) {
      this.images = this.productData.image;
    }

    this.series = Object.keys(this.data);

    if (this.selectedSet) {
      setTimeout(() => {
        this.element.forEach(el => {
          if (el.nativeElement.id === this.selectedSet) {
            this.scrollToElement(el);
            return;
          }
        });
      }, 300);
    }
  }

  scrollToElement(element) {
    element.nativeElement.scrollIntoView();
  }
}
