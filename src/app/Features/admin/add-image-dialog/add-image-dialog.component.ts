import { Component, Inject, OnInit } from '@angular/core';
import { ImageService } from '../../../tools/services/image.service';
import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FireService } from '../../../tools/services/fire.service';
import { ProductTypes } from '../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-add-image-dialog',
  templateUrl: './add-image-dialog.component.html',
  styleUrls: ['./add-image-dialog.component.scss'],
})
export class AddImageDialogComponent implements OnInit {
  imagesFormControl = new FormControl([],[Validators.required]);
  images: string[];
  disableSubmit:boolean = false;

  constructor(
    public imageService: ImageService,
    public domSanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<AddImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    private dialogData: {
      productType: ProductTypes;
      oldImages: string;
      replace:boolean;
    },
    private fireService: FireService
  ) {}

  async submit() {
    this.disableSubmit = true;
    let uploadedImages:string[] = await this.imageService.uploadMultiple(
      this.imagesFormControl.value,
      `products/${this.dialogData.productType}`,
      this.dialogData.replace? this.dialogData.oldImages:null
    );
    if (!this.dialogData.replace && this.dialogData.oldImages){
      uploadedImages = [...uploadedImages,...this.dialogData.oldImages]
    }
    const updateObj = { images: uploadedImages};

    await this.fireService.updateProductTypeDetails(this.dialogData.productType, updateObj).then(() => {
      if (uploadedImages) {
        this.fireService.DATABASE[this.dialogData.productType].images = uploadedImages;
      }
    });
    this.disableSubmit = false;
    this.dialogRef.close();
  }

  ngOnInit() {
    this.imagesFormControl.valueChanges.subscribe(images => {
      this.images = this.imageResolver(images);
    });
  }

  imageResolver(blobList: Blob[]): string[] {
    const images = [];
    for (const blob of blobList) {
      const imgUrl = window.URL.createObjectURL(blob);
      images.push(imgUrl);
    }
    return images;
  }
}
