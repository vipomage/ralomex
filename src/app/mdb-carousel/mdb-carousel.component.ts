import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdb-carousel',
  templateUrl: './mdb-carousel.component.html',
  styleUrls: ['./mdb-carousel.component.css']
})
export class MdbCarouselComponent implements OnInit {
  @Input() public images:string[]|string;
  constructor() { }

  isArray = (val) =>Array.isArray(val);

  onRightClick = ()=>{
    return false;
  };


  ngOnInit() {
  }

}
