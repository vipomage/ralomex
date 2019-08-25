import { Component, Input } from '@angular/core';

@Component({
  selector: 'ploughs-headers',
  templateUrl: './product-table-ploughs-headers.component.html',
  styleUrls: ['./../product-table-headers.scss'],
})
export class ProductTablePloughsHeadersComponent {
  @Input() name: string;
  @Input() set: string;
}
