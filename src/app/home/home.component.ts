import { Component, OnInit } from '@angular/core';
import { FireService } from '../tools/services/fire.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public homeProducts = this.db.AdminUtils.getElements('homeProducts');

  constructor(private db: FireService) {}

  ngOnInit() { }
}
