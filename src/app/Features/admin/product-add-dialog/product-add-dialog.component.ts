import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FireService } from '../../../tools/services/fire.service';
import { ProductIUnion } from '../../../tools/interfaces/DatabaseSchema';
import { ToastrService } from 'ngx-toastr';
import { config } from '../../../tools/services/config.service';

@Component({
  selector: 'app-product-add-dialog',
  templateUrl: './product-add-dialog.component.html',
  styleUrls: ['./product-add-dialog.component.scss'],
})
export class ProductAddDialog implements OnInit {
  fb: FormBuilder = new FormBuilder();
  autoCloseControl: FormControl = this.fb.control(false, [Validators.required]);
  productFormGroup: FormGroup;
  selectTypeFormControl: FormControl;
  selectSeriesFormControl: FormControl;

  headers = config.headers;

  types: string[];
  series: string[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public matDialogData: { type: string },
    private dialogRef: MatDialogRef<ProductAddDialog>,
    private fireService: FireService,
    private toastrService: ToastrService
  ) {}

  initProductFormGroup(productType: string): FormGroup {
    let fg: FormGroup = this.fb.group({});
    this.headers[productType].map(prop => {
      fg.addControl(prop.key, this.fb.control('', [Validators.required]));
    });
    return fg;
  }

  initProductTypeSelectFormControl(initialType: string): FormControl {
    return this.fb.control(initialType, [Validators.required]);
  }

  initSeriesSelectFormControl(productType: string, newSeries: string): FormControl {
    this.series = Object.keys(this.fireService.productTypes[productType].types[newSeries].series);

    if (this.series) {
      return this.fb.control(this.series[0], [Validators.required]);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  async saveProduct() {
    let productData: ProductIUnion = this.productFormGroup.value;
    await this.fireService.addItem(
      productData,
      this.matDialogData.type,
      this.selectTypeFormControl.value,
      this.selectSeriesFormControl.value
    );
    this.toastrService.success('Saved');
    if (this.autoCloseControl.value) {
      this.closeDialog();
    }
  }

  ngOnInit() {
    const productType = this.matDialogData.type;

    this.productFormGroup = this.initProductFormGroup(productType);

    this.types = Object.keys(this.fireService.productTypes[productType].types);

    if (this.types) {
      this.selectTypeFormControl = this.initProductTypeSelectFormControl(this.types[0]);
      this.selectSeriesFormControl = this.initSeriesSelectFormControl(
        productType,
        this.selectTypeFormControl.value
      );
      this.selectTypeFormControl.valueChanges.subscribe(selectedType => {
        this.selectSeriesFormControl = this.initSeriesSelectFormControl(productType, selectedType);
      });
    }
  }
}
