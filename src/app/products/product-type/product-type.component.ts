import { Component, OnInit, Input } from '@angular/core';
import { FireService } from '../../fire.service';


@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css'],
})
export class ProductTypeComponent implements OnInit {
  @Input() model: string;
  data;
  constructor(private db: FireService) {}

  ngOnInit() {}

  getPloughs = (type) =>
    this.db.getPloughs(type).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
}
