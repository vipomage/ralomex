import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cultivators',
  templateUrl: './cultivators.component.html',
  styleUrls: ['./cultivators.component.css'],
})
export class CultivatorsComponent implements OnInit {

  ngOnInit() {
    history.replaceState('', '', 'products/cultivators');
  }
}
