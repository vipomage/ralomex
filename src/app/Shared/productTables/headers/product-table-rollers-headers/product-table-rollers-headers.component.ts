import { Component, Input } from '@angular/core';

@Component({
  selector: 'rollers-headers',
  templateUrl: './product-table-rollers-headers.component.html',
  styleUrls: ['./../product-table-headers.scss'],
})
export class ProductTableRollersHeadersComponent {
  @Input() name: string;
  @Input() set: string;
  @Input() admin: boolean = false;
}
