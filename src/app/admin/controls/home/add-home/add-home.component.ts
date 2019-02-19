import { Component, OnInit } from '@angular/core';
import {FireService} from "../../../../../tools/services/fire.service";

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css']
})
export class AddHomeComponent implements OnInit {

  constructor(private db:FireService) { }

  saveHomeElement = (formData)=>{
    this.db.addHomeProduct(formData);
  };

  ngOnInit() {
  }

}
