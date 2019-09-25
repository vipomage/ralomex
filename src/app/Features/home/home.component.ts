import { Component, OnInit } from '@angular/core';
import { FireService } from '../../tools/services/fire.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  public homeProducts =this.db.AdminUtils.getElements('homeProducts');
  
  randomIndex:number = 0;
  images:string[] = [
    './../../../assets/img/royalty-free-images/webp/soil.webp',
    './../../../assets/img/royalty-free-images/webp/agriculture-2539967_1920.webp',
    './../../../assets/img/royalty-free-images/webp/arable-1084410_1920.webp',
    './../../../assets/img/royalty-free-images/webp/nature-3348409_1920.webp',
    './../../../assets/img/royalty-free-images/webp/panoramic-3035346_1920.webp',
  ];
  
  get randomImage():string {
    if (this.homeProducts){
     return this.images[this.randomIndex]
    }
  }
  
  constructor(private db: FireService) {}
  
  async ngOnInit() {
    this.randomIndex = this.randomNum(5);
  }
  
  
  randomNum(max = 10, min = 0): number {
    return Math.floor(Math.random() * (+max - +min)) + +min;
  }
  
}
