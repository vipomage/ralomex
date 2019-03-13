import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdb-table',
  templateUrl: './mdb-table.component.html',
  styleUrls: ['./mdb-table.component.css'],
})
export class MdbTableComponent implements OnInit {
  // elements: any = [
  //   {
  //     id: 1, heading1: 'Cell',
  //     heading2: 'Cell',
  //     heading3: 'Cell',
  //     heading4: 'Cell',
  //     heading5: 'Cell',
  //     heading6: 'Cell',
  //     heading7: 'Cell',
  //     heading8: 'Cell',
  //     heading9: 'Cell'
  //   },
  //   {
  //     id: 2, heading1: 'Cell',
  //     heading2: 'Cell',
  //     heading3: 'Cell',
  //     heading4: 'Cell',
  //     heading5: 'Cell',
  //     heading6: 'Cell',
  //     heading7: 'Cell',
  //     heading8: 'Cell',
  //     heading9: 'Cell'
  //   },
  //   {
  //     id: 3, heading1: 'Cell',
  //     heading2: 'Cell',
  //     heading3: 'Cell',
  //     heading4: 'Cell',
  //     heading5: 'Cell',
  //     heading6: 'Cell',
  //     heading7: 'Cell',
  //     heading8: 'Cell',
  //     heading9: 'Cell'
  //   },
  // ];
  @Input() collection: any;
  headElements = this.collection;

  editPlough = (itemId: string) => {
    console.log(`Request for Edit on Item with ID: ${itemId}`);
  };

  ngOnInit() {
    console.log(this.headElements);
  }
}
