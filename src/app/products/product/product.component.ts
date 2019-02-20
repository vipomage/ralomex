import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../../../tools/services/fire.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private type:String;
  private category:String;
  private subCategory:String;
  private id:String;

  public item;

  constructor(
    private route:ActivatedRoute,
    private db:FireService
  ) { }

  decode_utf8 = (s)=> decodeURI(s);

  ngOnInit() {
    this.type = this.decode_utf8(this.route.snapshot.params.type);
    this.category = this.decode_utf8(this.route.snapshot.params.category);
    this.subCategory = this.decode_utf8(this.route.snapshot.params.subCategory);
    this.id = this.route.snapshot.params.id;


    this.db.getItem(this.type,this.category,this.subCategory,this.id)
      .subscribe(res=>this.item = res)
  }

}
