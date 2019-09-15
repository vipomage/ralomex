import { Component } from '@angular/core';

@Component({
  selector: 'app-disks',
  template: '<app-category [category]="\'disks\'"></app-category>',
  styleUrls: ['./disks.component.css'],
})
export class DisksComponent {
  data;
  categories: string[];
}
