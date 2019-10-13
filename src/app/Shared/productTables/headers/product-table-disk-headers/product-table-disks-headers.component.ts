import { Component, Input } from '@angular/core';

@Component({
  selector: 'disks-headers',
  templateUrl: './product-table-disks-headers.component.html',
  styleUrls: ['./../product-table-headers.scss'],
})
export class ProductTableDisksHeadersComponent {
  @Input() name: string;
  @Input() set: string;
  @Input() admin: boolean = false;
}
