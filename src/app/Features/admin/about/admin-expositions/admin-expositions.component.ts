import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { FireService } from '../../../../tools/services/fire.service';
import { ExpoPreviewDialogComponent } from './expo-preview-dialog/expo-preview-dialog.component';
import { DbLocation } from '../../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-admin-expositions',
  templateUrl: './admin-expositions.component.html',
  styleUrls: ['./admin-expositions.component.scss'],
})
export class AdminExpositionsComponent {
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '500px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: 'Arial',
    defaultFontSize: '14px',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [],
    sanitize: false,
    toolbarPosition: 'top',
  };
  fb: FormBuilder = new FormBuilder();
  expositionFormControl = this.fb.control('');
  
  constructor(
    private dialogRef: MatDialogRef<AdminExpositionsComponent>,
    private fireService: FireService,
    private matDialog: MatDialog
  ) {}

  discard() {
    if (window.confirm('Сигурни ли сте ?')) {
      this.dialogRef.close();
    }
  }

  async save() {
    this.expositionFormControl.patchValue(
      this.expositionFormControl.value.toString().replace('<script>', '!!FORBIDDEN TAG BY USER!!')
    );
    const now = new Date;
    const utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() ,
      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    await this.fireService.AdminUtils.addElement(
      { data: this.expositionFormControl.value, timeStamp: utc_timestamp },
      DbLocation.EXPOSITIONS
    );
    this.dialogRef.close();
  }

  preview() {
    const dialogConfig: MatDialogConfig = {
      minWidth: '60vw',
      maxHeight: '90vh',
      closeOnNavigation: true,
      hasBackdrop: true,
      data: this.expositionFormControl.value,
    };
    this.matDialog.open(ExpoPreviewDialogComponent, dialogConfig);
  }
}
