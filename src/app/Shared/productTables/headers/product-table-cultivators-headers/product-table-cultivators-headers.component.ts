import { Component, Input } from '@angular/core';

@Component({
  selector: 'cultivators-headers',
  templateUrl: './product-table-cultivators-headers.component.html',
  styleUrls: ['./../product-table-headers.scss'],
})
export class ProductTableCultivatorsHeadersComponent {
  @Input() name: string;
  @Input() set: string;
  @Input() admin: boolean = false;
}
