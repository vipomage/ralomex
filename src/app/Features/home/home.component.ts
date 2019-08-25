import { Component, OnInit } from '@angular/core';
import { FireService } from '../../tools/services/fire.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  public homeProducts = this.db.AdminUtils.getElements('homeProducts');

  constructor(private db: FireService,private activeRoute:ActivatedRoute) {}
  
  ngOnInit(): void {
    console.log(this.activeRoute);
  }
  
}
