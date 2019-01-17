import { Component, OnInit } from '@angular/core';
import { PloughCategory } from '../../interfaces/plough-category';
import { FireService } from '../../fire.service';

@Component({
  selector: 'app-disks',
  templateUrl: './disks.component.html',
  styleUrls: ['./disks.component.css']
})
export class DisksComponent implements OnInit {

  data:PloughCategory;
  categories:String[];

  constructor(private db:FireService) { }

  ngOnInit() {

    this.db.getCategory('disks').subscribe(response => {
      this.data = response;
      this.categories = Object.keys(response);
    });

    history.replaceState('', '', 'products/disks');
  }

}
