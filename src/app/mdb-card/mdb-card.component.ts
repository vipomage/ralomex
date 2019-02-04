import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mdb-card',
  templateUrl: './mdb-card.component.html',
  styleUrls: ['./mdb-card.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class MdbCardComponent implements OnInit {
  @Input() heading;
  @Input() image;
  @Input() description;
  constructor() { }

  ngOnInit() {
  }

}
