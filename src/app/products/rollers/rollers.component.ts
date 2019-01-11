import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rollers',
  templateUrl: './rollers.component.html',
  styleUrls: ['./rollers.component.css']
})
export class RollersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    history.replaceState('', '', 'products/rollers');
  }

}
