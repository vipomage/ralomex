import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FireService } from '../../Tools/services/fire.service';
import { IUnion } from '../../Tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private db: FireService) {}

  projects: Observable<IUnion> = this.db.AdminUtils.getElements('projects');

  ngOnInit() {}
}
