import { Component, OnInit } from '@angular/core';
import { FireService } from '../../Tools/services/fire.service';
import { CatalogProduct } from '../../Tools/interfaces/catalogProduct';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  catalog:CatalogProduct;

  constructor(private readonly db:FireService){}
  
  async ngOnInit() {
    this.catalog = await this.db.getCatalog();
  }
}
