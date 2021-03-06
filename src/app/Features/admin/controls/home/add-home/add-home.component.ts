import { Component } from '@angular/core';
import { FireService } from '../../../../../tools/services/fire.service';
import { HomeProduct } from '../../../../../tools/interfaces/home-product';
import { DbLocation } from '../../../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css'],
})
export class AddHomeComponent {
  constructor(private db: FireService) {}

  saveHomeElement = (formData: HomeProduct) => {
    this.db.AdminUtils.addElement(formData, DbLocation.HOME_PRODUCTS);
  };
}
