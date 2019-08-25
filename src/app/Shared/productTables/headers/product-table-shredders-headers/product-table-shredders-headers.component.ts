import { Component, Input } from '@angular/core';

@Component({
  selector: 'shredders-headers',
  templateUrl: './product-table-shredders-headers.component.html',
  styleUrls: ['./../product-table-headers.scss'],
})
export class ProductTableShreddersHeadersComponent {
  @Input() name: string;
  @Input() set: string;
}
