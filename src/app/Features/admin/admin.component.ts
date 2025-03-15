import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../tools/services/auth.service';
import { FireService } from '../../tools/services/fire.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProductAddDialog } from './product-add-dialog/product-add-dialog.component';
import { TeamDialogComponent } from './about/team-dialog/team-dialog.component';
import { AdminExpositionsComponent } from './about/admin-expositions/admin-expositions.component';
import { InnovationsDialogComponent } from './about/admin-expositions/innovations-dialog/innovations-dialog.component';
import { AdminCertificateComponent } from './about/admin-certificate/admin-certificate.component';
import { ProductIUnion, ProductTypes } from '../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  productDialogConfig: MatDialogConfig = {
    width: '900px',
    closeOnNavigation: true,
    hasBackdrop: true,
    disableClose: true,
  };

  protected readonly ProductTypes = ProductTypes;

  activeTabIndex: number = 0;

  constructor(public authService: AuthService, private dialog: MatDialog, public fireService: FireService) {}

  setActiveTab(index: number) {
    if (index >= 0) {
      this.activeTabIndex = index;
    }
  }

  async ngOnInit() {
    await this.fireService.initCategories();
  }

  showAddProductDialog(productType: ProductTypes) {
    this.dialog.open(ProductAddDialog, { data: { productType }, ...this.productDialogConfig });
  }

  showEditProductDialog(event: {
    productType: ProductTypes;
    productSeries: string;
    productCategory: string;
    itemId: string;
    itemData: ProductIUnion;
  }) {
    this.dialog.open(ProductAddDialog, { data: event, ...this.productDialogConfig });
  }

  showMemberDialog() {
    const dialogConfig: MatDialogConfig = {
      width: '600px',
      closeOnNavigation: true,
      hasBackdrop: true,
      disableClose: true,
    };

    this.dialog.open(TeamDialogComponent, dialogConfig);
  }

  showExpoDialog() {
    const dialogConfig: MatDialogConfig = {
      minWidth: '90vw',
      maxHeight: '90vh',
      closeOnNavigation: true,
      hasBackdrop: true,
      disableClose: true,
    };

    this.dialog.open(AdminExpositionsComponent, dialogConfig);
  }

  showInnovationsDialog() {
    const dialogConfig: MatDialogConfig = {
      minWidth: '70vw',
      maxHeight: '90vh',
      closeOnNavigation: true,
      hasBackdrop: true,
      disableClose: true,
    };

    this.dialog.open(InnovationsDialogComponent, dialogConfig);
  }

  showCertificateDialog() {
    const dialogConfig: MatDialogConfig = {
      minWidth: '50vw',
      maxHeight: '90vh',
      closeOnNavigation: true,
      hasBackdrop: true,
      disableClose: true,
    };

    this.dialog.open(AdminCertificateComponent, dialogConfig);
  }
}
