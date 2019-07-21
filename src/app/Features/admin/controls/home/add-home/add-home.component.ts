import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../../Tools/services/fire.service';
import { HomeProduct } from '../../../../../Tools/interfaces/home-product';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css'],
})
export class AddHomeComponent implements OnInit {
  constructor(private db: FireService) {}

  saveHomeElement = (formData: HomeProduct) => {
    this.db.AdminUtils.addElement(formData, 'homeProducts');
  };

  ngOnInit() {}
}