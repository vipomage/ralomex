import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CertificateDialogComponent } from './certificate-dialog/certificate-dialog.component';
import { FireService } from '../../../tools/services/fire.service';
import {
  DbLocation,
  FirebaseResponseModel,
} from '../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent {
  certificates: Promise<FirebaseResponseModel> = this.fireService.AdminUtils
    .getElements(DbLocation.CERTIFICATES)
    .toPromise();
  
  constructor(private dialog: MatDialog, private fireService: FireService) {}

  showDialog(imageUrl: string) {
    const dialogConfig: MatDialogConfig = {
      hasBackdrop: true,
      closeOnNavigation: true,
      data: imageUrl,
      minWidth:'100vw',
      backdropClass:'p-0',
      panelClass:['p-0', 'certificate-scroll']
    };
    
    this.dialog.open(CertificateDialogComponent, dialogConfig);
  }
}
