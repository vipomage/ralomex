import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FireService } from '../../../tools/services/fire.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DbLocation, FirebaseResponseModel } from '../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-expositions',
  templateUrl: './expositions.component.html',
  styleUrls: ['./expositions.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ExpositionsComponent implements OnInit{
  expositions: FirebaseResponseModel;
  
  constructor(
    private fireService:FireService,
    public domSanitizer:DomSanitizer
  ){}
  
  sortByDate(a,b){
    return b.value.timeStamp - a.value.timeStamp;
  }
  
  async ngOnInit() {
    this.expositions = await this.fireService.AdminUtils.getElements(DbLocation.EXPOSITIONS).toPromise();
  }
}
