import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  BaseSchemaModel,
  ProductTypes,
  ProductIUnion,
} from '../../../tools/interfaces/DatabaseSchema';
import { FireService } from '../../../tools/services/fire.service';

@Component({
  selector: 'app-admin-edit-item',
  templateUrl: './admin-edit-item.component.html',
  styleUrls: ['./admin-edit-item.component.scss'],
})
export class AdminEditItemComponent implements OnInit {
  @Input() productType: ProductTypes;
  @Input() category: BaseSchemaModel<ProductIUnion>;
  selectedType: FormControl = new FormControl('', [Validators.required]);
  selectedSeries: FormControl = new FormControl('', [Validators.required]);
  categoryDescription: FormControl = new FormControl('');
  collection: { [propName: string]: ProductIUnion };
  addProductEmits: EventEmitter<ProductTypes> = new EventEmitter<ProductTypes>();
  @Output() editProductEmits: EventEmitter<any> = new EventEmitter();

  constructor(
    public fireService: FireService
  ) {}
  
  emitEdit(updateObj: {
    productType: ProductTypes;
    productCategory:string,
    productSeries: string;
    itemId: string;
    itemData: ProductIUnion;
  }) {
    this.editProductEmits.emit({productCategory:this.selectedType.value,...updateObj});
  }

  ngOnInit() {
    this.categoryDescription.patchValue(this.category.description);

    this.selectedType.valueChanges.subscribe(type => {
      this.selectedSeries.reset();
      this.collection = null;
    });

    this.selectedSeries.valueChanges.subscribe(series => {
      if (this.selectedSeries.valid) {
        this.collection = this.category.types[this.selectedType.value].series[series].collection;
      }
    });
  }
}
