import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PloughCategory } from '../../../tools/interfaces/plough-category';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent {
  @Input() data: PloughCategory;
  @Input() name;

  constructor() {}
}
