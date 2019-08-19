import { Component, Input } from '@angular/core';
import { PloughCategory } from '../../../Tools/interfaces/plough-category';

@Component({
  selector: 'app-plough-table',
  templateUrl: './plough-table.component.html',
  styleUrls: ['./plough-table.component.scss']
})
export class PloughTableComponent {
  @Input() ploughCategory:PloughCategory;
  @Input() set:string;
  
  headers = [
    {key:'model',value:'Model'},
    {key:'workBodyCount',value:'Body count'},
    {key:'reqHP',value:'Required HP'},
    {key:'mainBeam',value:'Main Beam Size'},
    {key:'bodiesDistance',value:'Body Distance'},
    {key:'widthWork',value:'Width Work'},
    {key:'clearance',value:'Clearance'},
    {key:'depthWork',value:'Depth Work'},
    {key:'transportSpeed',value:'Transport Speed'},
    {key:'workSpeed',value:'Work Speed'},
    {key:'productivity',value:'Productivity'},
    {key:'weight',value:'Weight'},
  ];
  
}
