import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixed-contact-popup',
  templateUrl: './fixed-contact-popup.component.html',
  styleUrls: ['./fixed-contact-popup.component.scss'],
})
export class FixedContactPopupComponent {
  isActive: boolean = false;

  constructor(public router: Router) {}

  setActive() {
    this.isActive = !this.isActive;
  }
}
