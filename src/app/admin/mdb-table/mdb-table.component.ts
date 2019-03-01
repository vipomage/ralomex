import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FireService } from '../../../tools/services/fire.service';

@Component({
  selector: 'app-mdb-table',
  templateUrl: './mdb-table.component.html',
  styleUrls: ['./mdb-table.component.css'],
})
export class MdbTableComponent implements OnInit {


  constructor(private db: FireService) {}

  ngOnInit() {}

}
