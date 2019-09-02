import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-expo-preview-dialog',
  templateUrl: './expo-preview-dialog.component.html',
  styleUrls: [
    './expo-preview-dialog.component.scss',
    './../../../../about-us/expositions/expositions.component.scss',
  ],
  encapsulation:ViewEncapsulation.Emulated
})
export class ExpoPreviewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public previewData: string,public domSanitizer:DomSanitizer) {}
}
