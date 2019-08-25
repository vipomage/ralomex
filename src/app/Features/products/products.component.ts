import { Component, OnInit } from '@angular/core';
import { FireService } from '../../tools/services/fire.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  catalog;

  constructor(private readonly db: FireService) {}

  async ngOnInit() {
    this.catalog = await this.db.getCatalog();
  }
}
