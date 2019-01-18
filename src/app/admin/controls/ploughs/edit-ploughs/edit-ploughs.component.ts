import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../fire.service';

@Component({
  selector: 'app-edit-ploughs',
  templateUrl: './edit-ploughs.component.html',
  styleUrls: ['./edit-ploughs.component.css']
})
export class EditPloughsComponent implements OnInit {
  categories:String[];
  constructor(private db:FireService) { }

  ngOnInit() {
    this.db.getCategory('ploughs').subscribe(data=>{
      this.categories = Object.keys(data)
    })
  }

}
