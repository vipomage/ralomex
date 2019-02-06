import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disks',
  template: '<app-category [category]="\'disks\'"></app-category>',
  styleUrls: ['./disks.component.css']
})
export class DisksComponent implements OnInit {

  data;
  categories:String[];

  constructor() { }

  ngOnInit() {


    //history.replaceState('', '', 'products/disks');
  }

}
