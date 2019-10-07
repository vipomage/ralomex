import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FireService } from '../../../tools/services/fire.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DbLocation, Exposition } from '../../../tools/interfaces/DatabaseSchema';

@Component({
  selector: 'app-expositions',
  templateUrl: './expositions.component.html',
  styleUrls: ['./expositions.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ExpositionsComponent implements OnInit{
  expositions;
  
  constructor(
    private fireService:FireService,
   
  ){}
  
  
  async ngOnInit() {
    const expos = <{[propName:string]:Exposition}> await this.fireService.AdminUtils.getElements(DbLocation.EXPOSITIONS).toPromise();
    this.expositions = Object.keys(expos).reverse().map(key => {
      return {id:key,...expos[key]}
    })
  }
}
