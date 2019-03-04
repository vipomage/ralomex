import { Component, OnInit } from '@angular/core';
import { FireService, IUnion } from '../../tools/services/fire.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private db:FireService) {}

  projects:Observable<IUnion> = this.db.Util.getElements('projects');

  ngOnInit() {}
}
