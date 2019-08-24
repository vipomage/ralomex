import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-disks-table',
  templateUrl: './disks-table.component.html',
  styleUrls: ['./disks-table.component.scss']
})
export class DisksTableComponent {
  @Input() disksCategory;
  @Input() set;
  
  headers = [
    {key:'model',value:'Model'},
    {key:'diskCount',value:'Disk count'},
    {key:'reqHP',value:'Required HP'},
    {key:'diskDiameter',value:'Disk Diameter'},
    {key:'axisSize',value:'Axis Size'},
    {key:'workWidth',value:'Working Width'},
    {key:'transportWidth',value:'Transporting Width'},
    {key:'diskWorkingDepth',value:'Disk Working Width'},
    {key:'transportSpeed',value:'Transport Speed'},
    {key:'workSpeed',value:'Work Speed'},
    {key:'productivity',value:'Productivity'},
    {key:'weightWoRotors',value:'Weight'},
  ];
  
}
