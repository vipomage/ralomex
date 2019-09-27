import { Component } from '@angular/core';
import { FireService } from '../../../tools/services/fire.service';
import { DbLocation } from '../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
})
export class AwardsComponent {
  awards = this.db.AdminUtils.getElements(DbLocation.AWARDS).toPromise();
  constructor(private db: FireService) {}
}
