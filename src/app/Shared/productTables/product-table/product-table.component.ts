import { Component, Input, OnInit } from '@angular/core';
import { config } from '../../../tools/services/config.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
  @Input() type: string;
  @Input() data;
  @Input() set;

  headers: [{ key: string; value: string }];

  ngOnInit(): void {
    this.headers = config.headers[this.type];
  }
}
