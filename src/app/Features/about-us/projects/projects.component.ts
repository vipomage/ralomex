import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FireService } from '../../../tools/services/fire.service';
import { DbLocation, FirebaseResponseModel } from '../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(private db: FireService) {}

  projects: Observable<FirebaseResponseModel> = this.db.AdminUtils.getElements(DbLocation.PROJECTS);
}
