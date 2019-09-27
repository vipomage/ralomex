import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FireService } from '../../../../../tools/services/fire.service';
import { HomeProduct } from '../../../../../tools/interfaces/home-product';
import { DbLocation, FirebaseResponseModel } from '../../../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css'],
})
export class EditHomeComponent {
  elements: Observable<FirebaseResponseModel> = this.db.AdminUtils.getElements(DbLocation.HOME_PRODUCTS);
  homeElementId: string;
  homeElement: HomeProduct;

  constructor(private db: FireService) {}

  setElement = (id: string, element: HomeProduct): void => {
    this.homeElementId = id;
    this.homeElement = element;
  };

  deleteElement = (elementId: string) => {
    let confirm = window.confirm('Сигурни ли сте че искате да изтриете този елемент');
    if (confirm) {
      window.document.getElementById(elementId).remove();
      return this.db.AdminUtils.deleteElementById(elementId, DbLocation.HOME_PRODUCTS);
    }
  };

  editHomeElement = (id: string, formData: HomeProduct) =>
    this.db.AdminUtils.updateElementById(id, 'homeProducts', formData);

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
