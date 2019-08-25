import { Component } from '@angular/core';
import { FireService } from '../../tools/services/fire.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public fireService:FireService){
  }
}
