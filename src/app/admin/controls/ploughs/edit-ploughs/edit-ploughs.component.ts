import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../../fire.service';

@Component({
  selector: 'app-edit-ploughs',
  templateUrl: './edit-ploughs.component.html',
  styleUrls: ['./edit-ploughs.component.css']
})
export class EditPloughsComponent implements OnInit {
  category:String;
  categories:String[];
  data;
  constructor(private db:FireService) { }


  onCategoryChange = (selectValue:String) => {
    this.category = selectValue;

  };


  ngOnInit() {
    this.db.getCategory('ploughs').subscribe(data=>{
      this.category = Object.keys(data)[0];
      this.categories = Object.keys(data);
      this.db.getCategory(this.category).subscribe(res=>{
        this.data = res;
        console.log(this.data);
      })
    })
  }

}
