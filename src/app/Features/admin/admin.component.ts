import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../tools/services/auth.service';
import { FireService } from '../../tools/services/fire.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProductAddDialog } from './product-add-dialog/product-add-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private dialog: MatDialog,
    public fireService: FireService
  ) {}

  async ngOnInit() {
    await this.fireService.initCategories();
  }

  showAddProductDialog(type: string) {
    const dialogConfig: MatDialogConfig = {
      width: '900px',
      closeOnNavigation: true,
      hasBackdrop: true,
      disableClose: true,
      data: { type },
    };

    this.dialog.open(ProductAddDialog, dialogConfig);
  }
}
