import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FireService } from '../../../../tools/services/fire.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { config } from '../../../../tools/services/config.service';
import { ImageService } from '../../../../tools/services/image.service';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.scss'],
})
export class TeamDialogComponent implements OnInit {
  fb = new FormBuilder();
  teamMemberFG: FormGroup = this.fb.group({});
  uploading: boolean = false;
  inputFields = config.objectSchemas.teamMember;

  constructor(
    @Inject(MAT_DIALOG_DATA) public matDialogData: { type: string },
    private dialogRef: MatDialogRef<TeamDialogComponent>,
    private fireService: FireService,
    private imageService: ImageService,
    private toastrService: ToastrService
  ) {}
  memberAvatar: FileList;

  onFileChange(event) {
    this.memberAvatar = event.target.files;
    if (this.memberAvatar) {
      this.teamMemberFG.get('avatarUrl').setValue('valid');
    }
  }

  async saveMember() {
    this.teamMemberFG.disable();
    this.uploading = true;
    const imageUrl = await this.imageService.uploadSingle(this.memberAvatar, 'team');
    this.teamMemberFG.patchValue({ avatarUrl: imageUrl });

    try {
      await this.fireService.memberUtils.addMember(this.teamMemberFG.value);
    } catch (e) {
      this.toastrService.error(e.error.message);
    }

    this.dialogRef.close();
    this.toastrService.success('Member Added');
    this.uploading = false;
  }

  ngOnInit() {
    config.objectSchemas.teamMember.map(inputFields => {
      this.teamMemberFG.registerControl(
        inputFields.key,
        this.fb.control('', [Validators.required])
      );
    });
  }
}
