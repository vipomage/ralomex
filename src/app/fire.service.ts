import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PloughCategory } from './interfaces/plough-category';

@Injectable({
  providedIn: 'root',
})
export class FireService {
  constructor(private db: AngularFireDatabase, private http: HttpClient) {}

  getCategory = (category): Observable<PloughCategory> =>
    this.http.get<PloughCategory>(
      `https://ralomex-34693.firebaseio.com/${category}.json`
    );

  getSubCategoryData = (category, type) =>
    this.http.get(
      `https://ralomex-34693.firebaseio.com/${category}/${type}.json`
    );

  getPloughs = (type, category) =>
    this.http.get(
      `https://ralomex-34693.firebaseio.com/${category}/${type}.json`
    );
}
