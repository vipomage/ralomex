import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdb-jumbotron',
  templateUrl: './mdb-jumbotron.component.html',
  styleUrls: ['./mdb-jumbotron.component.css']
})
export class MdbJumbotronComponent implements OnInit {

  @Input() title;
  @Input() productCategory;

  constructor() { }

  ngOnInit() {
  }

}
