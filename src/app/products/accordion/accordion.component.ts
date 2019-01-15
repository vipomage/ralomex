import { Component } from '@angular/core';
import { FireService } from '../../fire.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  data;

  constructor(private db: FireService) {}

  getPloughs = type =>
    this.db.getPloughs(type).subscribe(data => (this.data = data));
}
