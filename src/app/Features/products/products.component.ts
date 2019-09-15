import { Component, OnInit } from '@angular/core';
import { FireService } from '../../tools/services/fire.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  catalog;

  activeCategory = {
    ploughs: false,
    disks: false,
    cultivators: false,
    rollers: false,
    shredders: false,
    sprayers: false,
    special: false,
    parts: false,
  };

  constructor(private readonly db: FireService) {}

  addActiveClass(event, category) {
    event.stopPropagation();
    for (let activeCategoryKey in this.activeCategory) {
      this.activeCategory[activeCategoryKey] = false;
    }

    this.activeCategory[category] = true;
  }

  async ngOnInit() {
    this.catalog = await this.db.getCatalog();
  }
}
