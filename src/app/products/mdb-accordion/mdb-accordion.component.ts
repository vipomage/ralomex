import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdb-accordion',
  templateUrl: './mdb-accordion.component.html',
  styleUrls: ['./mdb-accordion.component.css']
})
export class MdbAccordionComponent implements OnInit {
  multiple:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
