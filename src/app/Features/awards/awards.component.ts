import { Component, OnInit } from '@angular/core';
import { FireService } from '../../tools/services/fire.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
})
export class AwardsComponent implements OnInit {
  awards = this.db.AdminUtils.getElements('awards');

  constructor(private db: FireService) {}

  ngOnInit() {}
}
