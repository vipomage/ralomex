import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../fire.service';

@Component({
  selector: 'app-add-plough',
  templateUrl: './add-plough.component.html',
  styleUrls: ['./add-plough.component.css']
})
export class AddPloughComponent implements OnInit {
  categories:String[];
  category: any;
  constructor(private db:FireService) { }

  ngOnInit() {
    this.db.getCategory('ploughs').subscribe(data=>{
      this.categories = Object.keys(data);
    })
  }

}
