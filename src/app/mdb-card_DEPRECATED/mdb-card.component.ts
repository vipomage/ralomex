import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-mdb-card',
  templateUrl: './mdb-card.component.html',
  styleUrls: ['./mdb-card.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class MdbCardComponent implements OnInit {
  @Input() type:String;
  @Input() category:String;
  @Input() heading:String;
  @Input() image:String;
  @Input() description:String;
  constructor() { }

  ngOnInit() {
  }

}
