import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mdb-card',
  templateUrl: './mdb-card.component.html',
  styleUrls: ['./mdb-card.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class MdbCardComponent implements OnInit {
  @Input() type:string;
  @Input() category:string;
  @Input() heading:string;
  @Input() image:string;
  @Input() description:string;
  constructor() { }

  ngOnInit() {
  }

}
