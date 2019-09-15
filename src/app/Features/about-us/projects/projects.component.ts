import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FireService } from '../../../tools/services/fire.service';
import { IUnion } from '../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  constructor(private db: FireService) {}

  projects: Observable<IUnion> = this.db.AdminUtils.getElements('projects');
}
