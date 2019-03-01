import { Component, OnInit } from '@angular/core';
import { News } from '../../tools/interfaces/news';
import { FireService } from '../../tools/services/fire.service';

@Component({
  selector: 'app-mdb-news',
  templateUrl: './mdb-news.component.html',
  styleUrls: ['./mdb-news.component.css'],
})
export class MdbNewsComponent implements OnInit {
  latestNewsElement: News;
  news: News[];

  constructor(private db: FireService) {}

  ngOnInit() {
    this.db.Util.getElements('news').subscribe(res => {
      this.news = Object.values(res).sort(
        (a: News, b: News) => b.timeStamp - a.timeStamp
      );
      this.latestNewsElement = this.news.shift();
    });
  }
}
