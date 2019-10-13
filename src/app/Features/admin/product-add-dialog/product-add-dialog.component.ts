import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FireService } from '../../../tools/services/fire.service';
import { ProductIUnion, ProductTypes } from '../../../tools/interfaces/DatabaseSchema';
import { ToastrService } from 'ngx-toastr';
import { config } from '../../../tools/services/config.service';
import { ImageService } from '../../../tools/services/image.service';

@Component({
  selector: 'app-product-add-dialog',
  templateUrl: './product-add-dialog.component.html',
  styleUrls: ['./product-add-dialog.component.scss'],
})
export class ProductAddDialog implements OnInit {
  fb: FormBuilder = new FormBuilder();
  autoCloseControl: FormControl = this.fb.control(true, [Validators.required]);
  productFormGroup: FormGroup;
  selectTypeFormControl: FormControl;
  selectSeriesFormControl: FormControl;
  fileFormControl = new FormControl('');
  isUpdate: boolean = false;
  disableSubmit: boolean = false;

  headers = config.headers;

  types: string[];
  series: string[];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public matDialogData: {
      productType: ProductTypes;
      productCategory: string;
      productSeries?: string;
      itemId?: string;
      itemData?: ProductIUnion;
    },
    private dialogRef: MatDialogRef<ProductAddDialog>,
    private fireService: FireService,
    private toastrService: ToastrService,
    private imageService: ImageService
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
    this.disableSubmit = true;
    const uploadedImageUrls = await this.uploadImages(this.fileFormControl.value);
  
    this.productFormGroup.patchValue({images: uploadedImageUrls});
    
    let productData: ProductIUnion = this.productFormGroup.value;
    await this.fireService.addItem(
      productData,
      this.matDialogData.productType,
      this.selectTypeFormControl.value,
      this.selectSeriesFormControl.value
    );
    this.toastrService.success('Saved');
    if (this.autoCloseControl.value) {
      this.closeDialog();
    }
    this.disableSubmit = false;
  }

  async updateProduct() {
    this.disableSubmit = true;
    const uploadedImageUrls = await this.uploadImages(this.fileFormControl.value);
    
    this.productFormGroup.patchValue({images: uploadedImageUrls});
    
    await this.fireService.updateItem(
      this.productFormGroup.value,
      this.matDialogData.productType,
      this.matDialogData.productCategory,
      this.matDialogData.productSeries,
      this.matDialogData.itemId
    );
    //Local UI Update
    this.fireService.DATABASE[this.matDialogData.productType].types[
      this.matDialogData.productCategory
    ].series[this.matDialogData.productSeries].collection[
      this.matDialogData.itemId
    ] = this.productFormGroup.value;

    this.toastrService.success('Saved');

    if (this.autoCloseControl.value) {
      this.closeDialog();
    }
    this.disableSubmit = false;
  }

  async uploadImages(fileList: FileList) {
    const { productType, productCategory, productSeries, itemId } = this.matDialogData;
    return await this.imageService.uploadMultiple(
      fileList,
      `products/${productType}/${productCategory}/${productSeries}/${itemId}-${this.matDialogData.itemData.model}`
    );
  }

  ngOnInit() {
    const productType = this.matDialogData.productType;

    this.productFormGroup = this.initProductFormGroup(productType);
    this.productFormGroup.addControl('images',new FormControl([]));

    this.types = Object.keys(this.fireService.productTypes[productType].types);

    if (
      this.matDialogData.itemId &&
      this.matDialogData.productType &&
      this.matDialogData.productCategory &&
      this.matDialogData.productSeries &&
      this.matDialogData.itemData
    ) {
      this.selectTypeFormControl = this.fb.control(this.matDialogData.productCategory);
      this.selectSeriesFormControl = this.initSeriesSelectFormControl(
        this.matDialogData.productType,
        this.selectTypeFormControl.value
      );
      this.selectSeriesFormControl.patchValue(this.matDialogData.productSeries);

      this.selectSeriesFormControl.disable();
      this.selectTypeFormControl.disable();

      this.productFormGroup.patchValue(this.matDialogData.itemData);
      this.isUpdate = true;
    }

    if (this.types && !this.isUpdate) {
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
