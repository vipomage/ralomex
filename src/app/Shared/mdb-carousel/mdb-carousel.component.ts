import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mdb-carousel',
  templateUrl: './mdb-carousel.component.html',
  styleUrls: ['./mdb-carousel.component.scss'],
})
export class MdbCarouselComponent {
  @Input() public images: string[] | string;

  isArray(val) {
    return Array.isArray(val);
  }

  onRightClick(event) {
    event.stopPropagation();
    return false;
  }
}
