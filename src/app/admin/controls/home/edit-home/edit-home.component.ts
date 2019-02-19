import { Component, OnInit } from '@angular/core';
import {FireService} from "../../../../../tools/services/fire.service";
import {element} from "protractor";

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {
  elements;
  homeElementId;
  homeElement;

  constructor(private db:FireService) { }

  setElement = (id,element)=>{
    this.homeElementId = id;
    this.homeElement = element;
  };

  deleteElement =(elementId) =>{
    let confirm  =window.confirm('Сигурни ли сте че искате да изтриете този елемент');
    if (confirm) {
      window.document.getElementById(elementId).remove();
      return  this.db.deleteHomeProduct(elementId)
    }
  };

  editHomeElement = (id,formData)=>{
    return this.db.updateHomeProduct(id,formData)
  };

  ngOnInit() {
    this.db.getHomeProducts().subscribe(data=>this.elements =data)
  }

}
