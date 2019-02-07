import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdb-section',
  templateUrl: './mdb-section.component.html',
  styleUrls: ['./mdb-section.component.css']
})
export class MdbSectionComponent implements OnInit {

  @Input() index;
  @Input() type:String;
  @Input() category:String;
  @Input() heading:String;
  @Input() image:String;
  @Input() description:String;

  private _left:boolean;

  constructor() { }

  public get left(){
    return this._left
  }
  public set left(newValue){
    this._left = newValue
  }

  ngOnInit() {
    this.left = this.index % 2 === 0 || this.index === 0
  }

}
