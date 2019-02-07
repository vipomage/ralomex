import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ploughs',
  template: '<app-category [category]="\'ploughs\'"></app-category>',
  styleUrls: ['./ploughs.component.css'],
})
export class PloughsComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
