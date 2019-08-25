import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprayers-headers',
  templateUrl: './product-table-sprayers-headers.component.html',
  styleUrls: ['./../product-table-headers.scss'],
})
export class ProductTableSprayersHeadersComponent {
  @Input() name: string;
  @Input() set: string;
}
