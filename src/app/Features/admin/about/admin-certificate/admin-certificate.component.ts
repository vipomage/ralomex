import { Component, OnInit } from '@angular/core';
import { DbLocation } from '../../../../tools/interfaces/DatabaseSchema';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageService } from '../../../../tools/services/image.service';
import { MatDialogRef } from '@angular/material';
import { FireService } from '../../../../tools/services/fire.service';

@Component({
  selector: 'app-admin-certificate',
  templateUrl: './admin-certificate.component.html',
  styleUrls: ['./admin-certificate.component.scss'],
})
export class AdminCertificateComponent {
  fileFormControl = new FormControl('');

  certificateFormGroup = new FormGroup({
    imageUrl: new FormControl('', [Validators.required]),
    heading: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private imageService: ImageService,
    private fireService: FireService,
    private dialogRef: MatDialogRef<AdminCertificateComponent>
  ) {}

  async uploadImage(fileList: FileList) {
    return await this.imageService.uploadSingle(fileList, 'certificates');
  }

  discard() {
    if (window.confirm('Сигурни ли сте ?')) {
      this.dialogRef.close();
    }
  }

  async save() {
    this.certificateFormGroup.patchValue({
      imageUrl: await this.uploadImage(this.fileFormControl.value),
    });

    await this.fireService.AdminUtils.addElement(
      {
        ...this.certificateFormGroup.value,
        timeStamp: Date.now(),
      },
      DbLocation.CERTIFICATES
    );
    this.dialogRef.close();
  }
}
