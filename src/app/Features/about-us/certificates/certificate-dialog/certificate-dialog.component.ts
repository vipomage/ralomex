import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-certificate-dialog',
  templateUrl: './certificate-dialog.component.html',
  styleUrls: ['./certificate-dialog.component.scss'],
})
export class CertificateDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public certificateUrl: string,public dialogRef:MatDialogRef<CertificateDialogComponent>) {}
}
