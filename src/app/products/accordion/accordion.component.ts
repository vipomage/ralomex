import { Component, ViewEncapsulation } from '@angular/core';
import { FireService } from '../../fire.service';
import { Plough } from '../../interfaces/plough';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AccordionComponent {
  data;
  categoryInfo:{name:String,collection:[Plough]};

  //todo create Category in DB and collection for it
  //components setup

  constructor(private db: FireService) {}

  getPloughs = (type) =>
    this.db
      .getPloughs(type)
      .subscribe(
        (data) => (this.data = data)
      );
}
