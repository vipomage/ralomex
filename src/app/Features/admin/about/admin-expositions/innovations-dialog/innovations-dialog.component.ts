import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { FireService } from '../../../../../tools/services/fire.service';
import { ImageService } from '../../../../../tools/services/image.service';
import { DbLocation } from '../../../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-innovations-dialog',
  templateUrl: './innovations-dialog.component.html',
  styleUrls: ['./innovations-dialog.component.scss'],
})
export class InnovationsDialogComponent {
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
  
  headingFormControl = new FormControl('',[Validators.required])
  innovationsFormControl = new FormControl('', [Validators.required]);
  fileFormControl = new FormControl([],[Validators.required]);
  imageUrl: string;
  
  constructor(
    private fireService: FireService,
    private imageService: ImageService,
    private dialogRef: MatDialogRef<InnovationsDialogComponent>,
  ) {}
  
  
  async uploadImage(fileList:FileList){
    return await this.imageService.uploadSingle(fileList)
  }

  discard() {
    if (window.confirm('Сигурни ли сте ?')) {
      this.dialogRef.close();
    }
  }

  async save() {
    this.filterFormControlForbiddenTags(this.innovationsFormControl);
  
    this.imageUrl = await this.uploadImage(this.fileFormControl.value);
    
    await this.fireService.AdminUtils.addElement(
      {
        heading:this.headingFormControl.value,
        data: this.innovationsFormControl.value,
        image: this.imageUrl ,
        timeStamp: Date.now()
      },
      DbLocation.INNOVATIONS
    );
    this.dialogRef.close();
  }
  
  filterFormControlForbiddenTags(formControl:FormControl){
    formControl.patchValue(
      formControl.value.toString().replace('<script>', '!!FORBIDDEN TAG BY USER!!')
    );
  }
}
