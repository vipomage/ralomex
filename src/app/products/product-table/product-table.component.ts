import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent implements OnInit {
  @Input() data;

  private type:String;
  private category:String;
  private subCategory:String;

  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.params.subscribe(data => console.log(data));
    this.type = this.route.snapshot.params.type;
    this.category = this.route.snapshot.params.category;
    this.subCategory = this.route.snapshot.params.subCategory;
  }
}
