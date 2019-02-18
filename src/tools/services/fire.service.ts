import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { PloughCategory } from '../interfaces/plough-category';
import { Plough } from '../interfaces/plough';
import { environment } from '../../environments/environment';
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

  getHomeProducts = () => this.http.get(`${databaseUrl}/homeProducts.json`);

  getItem = (
    type: String,
    category: String,
    subCategory: String,
    id: String
  ) => {
    return this.http.get(
      `${databaseUrl}/${type}/types/${category}/collection/${subCategory}/collection/`.toLocaleLowerCase() +
        `${id}.json`
    );
  };

  getType = (type: String) => this.http.get(`${databaseUrl}/${type}.json`);

  getSubCategoryData = (type, category, subCategory) =>
    this.http.get(
      `${databaseUrl}/${type}/types/${category}/collection/${subCategory}/collection.json`.toLocaleLowerCase()
    );

  addPlough = (data: Plough, category: String) =>
    this.db.database.ref(`ploughs/${category}/collection`).push(data);

  addPloughCategory = (category, categoryDetails: PloughCategory) =>
    this.db.database.ref(`ploughs/types/${category.toLowerCase()}`).set({
      collection: [],
      description: categoryDetails.description,
      images: categoryDetails.images,
      name: categoryDetails.name,
    });

  addSubCategory = (generalCategory: String) => {};

  editItem = (key: String, category: String) =>
    this.http.get<Plough>(
      `${databaseUrl}/ploughs/${category}/collection/${key}.json`
    );

  removePlough = (id: String) =>
    this.db.database.ref(`ploughs/${id}`).remove(e => console.log(e.message));
}
