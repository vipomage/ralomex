import { Component, ViewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { FireService } from '../../../../tools/services/fire.service';
import { ExpoPreviewDialogComponent } from './expo-preview-dialog/expo-preview-dialog.component';
import { DbLocation } from '../../../../tools/interfaces/DatabaseSchema';
import { ImageService } from '../../../../tools/services/image.service';

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
  fileFormControl = new FormControl('');
  headingFormControl = new FormControl('',[Validators.required]);
  @ViewChild('editorComponent',{static: false}) editorComponent;
  
  constructor(
    private dialogRef: MatDialogRef<AdminExpositionsComponent>,
    private fireService: FireService,
    private matDialog: MatDialog,
    private imageService:ImageService
  ) {}

  discard() {
    if (window.confirm('Сигурни ли сте ?')) {
      this.dialogRef.close();
    }
  }
  
  async uploadImage(fileList: FileList) {
    return await this.imageService.uploadSingle(fileList, 'expositions');
  }
  
  async save() {
    this.fileFormControl.patchValue({
      imageUrl: await this.uploadImage(this.fileFormControl.value),
    });
    
    this.expositionFormControl.patchValue(
      this.expositionFormControl.value.toString().replace('<script>', '!!FORBIDDEN TAG BY USER!!')
    );
    const now = new Date;
    const utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() ,
      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
  
    await this.fireService.AdminUtils.addElement(
      {
        heading: this.headingFormControl.value,
        data: this.expositionFormControl.value,
        excerpt: this.editorComponent.textArea.nativeElement.innerText.replace('\n',' ').slice(0,85),
        timeStamp: utc_timestamp,
        image:this.fileFormControl.value.imageUrl },
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
