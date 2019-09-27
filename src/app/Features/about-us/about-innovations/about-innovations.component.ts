import { Component } from '@angular/core';
import { DbLocation, FirebaseResponseModel } from '../../../tools/interfaces/DatabaseSchema';
import { FireService } from '../../../tools/services/fire.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about-innovations',
  templateUrl: './about-innovations.component.html',
  styleUrls: ['./about-innovations.component.scss'],
})
export class AboutInnovationsComponent {
  innovations: Promise<FirebaseResponseModel> = this.fireService.AdminUtils.getElements(
    DbLocation.INNOVATIONS
  ).toPromise();

  constructor(private fireService: FireService, public domSanitizer: DomSanitizer) {}

  sortByDate(a, b) {
    return b.value.timeStamp - a.value.timeStamp;
  }
}
