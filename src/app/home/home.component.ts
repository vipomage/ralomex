import { Component, OnInit } from '@angular/core';
import { FireService } from '../../tools/services/fire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public homeProducts;

  constructor(private db: FireService,private router:Router) {}


  ngOnInit() {
   this.db
      .getHomeProducts()
      .subscribe(res=>this.homeProducts = res);
  }

}
