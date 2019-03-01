import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../../tools/services/fire.service';
import { HomeProduct } from '../../../../../tools/interfaces/home-product';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css'],
})
export class AddHomeComponent implements OnInit {
  constructor(private db: FireService) {}

  saveHomeElement = (formData: HomeProduct) => {
    this.db.HomeControls.addHomeProduct(formData);
  };

  ngOnInit() {}
}
