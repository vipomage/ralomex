import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { News } from '../../../tools/interfaces/news';

@Component({
  selector: 'app-news-dialog',
  templateUrl: './news-dialog.component.html',
  styleUrls: ['./news-dialog.component.scss'],
})
export class NewsDialogComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: News,public dialogRef:MatDialogRef<NewsDialogComponent>) {}
}
