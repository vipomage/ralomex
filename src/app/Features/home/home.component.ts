import { Component } from '@angular/core';
import { FireService } from '../../tools/services/fire.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public homeProducts = this.db.AdminUtils.getElements('homeProducts');

  constructor(private db: FireService) {}
}
