import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mdb-jumbotron',
  templateUrl: './mdb-jumbotron.component.html',
  styleUrls: ['./mdb-jumbotron.component.css'],
})
export class MdbJumbotronComponent {
  @Input() title;
  @Input() productCategory;
  
}
