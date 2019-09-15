import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rippers',
  templateUrl: './rippers.component.html',
  styleUrls: ['./rippers.component.css'],
})
export class RippersComponent implements OnInit {

  ngOnInit() {
    history.replaceState('', '', 'products/rippers');
  }
}
