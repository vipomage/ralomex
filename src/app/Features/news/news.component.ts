import { Component, OnInit } from '@angular/core';
import { News } from '../../tools/interfaces/news';
import { FireService } from '../../tools/services/fire.service';
import { DbLocation, FirebaseResponseModel, IUnion } from '../../tools/interfaces/DatabaseSchema';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewsDialogComponent } from './news-dialog/news-dialog.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  latestNewsElement: IUnion;
  news: IUnion[];

  constructor(
    private db: FireService,
    private matDialog: MatDialog
  ) {}
  
  showDialog(newsObject:News){
    const dialogConfig:MatDialogConfig = {
      hasBackdrop:true,
      panelClass:['col-md-8','col-sm-12'],
      maxHeight:'90vh',
      maxWidth:'unset',
      closeOnNavigation: true,
      data: newsObject
    };
    
    this.matDialog.open(NewsDialogComponent,dialogConfig);
  }

  ngOnInit() {
    this.db.AdminUtils.getElements(DbLocation.NEWS).subscribe((res:FirebaseResponseModel) => {
      this.news = Object.values(res).sort((a: News, b: News)=> b.timeStamp - a.timeStamp);
      this.latestNewsElement = this.news.shift();
    });
  }
}
