import { ChangeDetectorRef, Component, EventEmitter, Input, IterableDiffers, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Header, ProductIUnion, ProductTypes } from '../../../tools/interfaces/DatabaseSchema';
import { config } from '../../../tools/services/config.service';

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.scss']
})
export class EditableTableComponent implements OnInit {
  ProductTypes = ProductTypes;
  @Input() type: ProductTypes;
  @Input() set: string;
  @Input() collection: {[propName:string]:ProductIUnion};
  headers: Header[];
  @Output() itemUpdate: EventEmitter<any> = new EventEmitter();
  
  emitItemId(itemId:string, itemData) {
    const updateObj = {
      productType:this.type,
      productSeries: this.set,
      itemId,
      itemData
    };
    this.itemUpdate.emit(updateObj);
  }
  
  ngOnInit(): void {
    this.headers = config.headers[this.type];
  }
  
}
