import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdb-accordion',
  templateUrl: './mdb-accordion.component.html',
  styleUrls: ['./mdb-accordion.component.css'],
})
export class MdbAccordionComponent implements OnInit {
  multiple: boolean = true;
  @Input() data: any;
  @Input() type: string;
  @Input() category: string;
  subCategories: string[];
  
  ngOnInit() {
    this.subCategories = Object.keys(this.data);
  }
}
