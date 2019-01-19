import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PloughCategory } from './interfaces/plough-category';
import { Plough } from './interfaces/plough';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

const databaseUrl: String = environment.firebase.databaseURL;

@Injectable({
  providedIn: 'root',
})
export class FireService {
  constructor(
    private auth: AuthService,
    private db: AngularFireDatabase,
    private http: HttpClient
  ) {}

  addPlough = (data: Plough, category: String) =>
    this.db.database.ref(`ploughs/${category}/collection`).push(data);

  addPloughCategory = (category, categoryDetails) =>
    this.db.database.ref(`ploughs/${category}`).set({
      collection: [],
      description: categoryDetails.description,
      image: categoryDetails.image,
      name: categoryDetails.name,
    });

  getCategory = (category): Observable<PloughCategory> =>
    this.http.get<PloughCategory>(`${databaseUrl}/${category}.json`);

  removePlough = (id: String) =>
    this.db.database.ref(`ploughs/${id}`).remove(e => console.log(e.message));
}
