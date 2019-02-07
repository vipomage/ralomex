import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public visible:boolean = true;
  constructor() {}

  itemPicked = () =>this.visible =!this.visible;

  ngOnInit() {}
}
