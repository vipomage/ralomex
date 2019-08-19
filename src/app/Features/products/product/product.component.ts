import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../../../Tools/services/fire.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  private type: string;
  private series: string;
  private category: string;
  private id: string;

  public item;

  constructor(private route: ActivatedRoute, private db: FireService) {}

  async ngOnInit() {
    this.type = this.route.snapshot.params.type;
    this.category = this.route.snapshot.params.category;
    this.series = this.route.snapshot.params.series;
    this.id = this.route.snapshot.params.id;

    this.item = await this.db
      .getSingleItem(this.type, this.category, this.series, this.id)
      .toPromise();
  }
}
