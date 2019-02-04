import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../tools/services/fire.service';
import { PloughCategory } from '../../../tools/interfaces/plough-category';

@Component({
  selector: 'app-ploughs',
  templateUrl: './ploughs.component.html',
  styleUrls: ['./ploughs.component.css'],
})
export class PloughsComponent implements OnInit {
  data:PloughCategory;
  categories:String[];

  constructor(private db: FireService) {}

  ngOnInit() {
    this.db.getCategory('ploughs').subscribe(response => {
      this.data = response;
      this.categories = Object.keys(response['types']);
    });

    history.replaceState('', '', 'products/ploughs');
  }
}
