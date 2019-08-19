import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-disks-table',
  templateUrl: './disks-table.component.html',
  styleUrls: ['./disks-table.component.scss']
})
export class DisksTableComponent implements OnInit {
  @Input() disksCategory;
  @Input() set;
  
  headers = [
    {key:'model',value:'Model'},
    {key:'clearance',value:'Clearance'},
    {key:'depthWork',value:'Working Depth'},
    {key:'productivity',value:'Productivity'},
    {key:'reqHp',value:'Required HP'},
    {key:'widthWork',value:'Working Width'},
    {key:'speed',value:'Speed'},
    {key:'weight',value:'Weight'}
  ];
  
  constructor() { }
  
  ngOnInit() {
  }
}
