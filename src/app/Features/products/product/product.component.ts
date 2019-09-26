import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../../../tools/services/fire.service';
import { ProductIUnion } from '../../../tools/interfaces/DatabaseSchema';
import { config } from '../../../tools/services/config.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss',
    './../../../Shared/productTables/headers/product-table-headers.scss',
    './../../../Shared/productTables/product-table/product-table.component.scss'
  ],
})
export class ProductComponent implements OnInit {
  private type: string;
  private series: string;
  private category: string;
  private id: string;

  public item:ProductIUnion;
  headers: [{ key: string; value: string }];
  
  images:string[] = [
    '../../../../assets/img/royalty-free-images/webp/soil.webp',
    '../../../../assets/img/royalty-free-images/webp/agriculture-2539967_1920.webp',
    '../../../../assets/img/royalty-free-images/webp/arable-1084410_1920.webp',
    '../../../../assets/img/royalty-free-images/webp/nature-3348409_1920.webp',
    '../../../../assets/img/royalty-free-images/webp/panoramic-3035346_1920.webp',
  ];
  
  randomImage = this.images[this.randomNum(this.images.length)];
  
  constructor(private route: ActivatedRoute, private db: FireService) {}
  
  

  async ngOnInit() {
    this.type = this.route.snapshot.params.type;
    this.category = this.route.snapshot.params.category;
    this.series = this.route.snapshot.params.series;
    this.id = this.route.snapshot.params.id;
    this.headers = config.headers[this.type];
    
    this.item = await this.db
      .getSingleItem(this.type, this.category, this.series, this.id)
      .toPromise();
  }
  
  isArray(prop:any){
    return Array.isArray(prop);
  }
  
  randomNum(max = 10, min = 0): number {
    return Math.floor(Math.random() * (+max - +min)) + +min;
  }
  
}
