import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdb-accordion',
  templateUrl: './mdb-accordion.component.html',
  styleUrls: ['./mdb-accordion.component.css']
})
export class MdbAccordionComponent implements OnInit {
  multiple:boolean = true;
  @Input() data:any;
  @Input() category:any;
  subCategories:String[];


  constructor() { }

  logging = ()=>{
    console.log('Works!');
  }


  ngOnInit() {
    this.subCategories = Object.keys(this.data.collection);
    console.log(this.subCategories);
  }

}
