import { Component } from '@angular/core';
import { FireService } from '../../../tools/services/fire.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
})
export class AwardsComponent {
  awards = this.db.AdminUtils.getElements('awards').toPromise();
  constructor(private db: FireService) {}
}
