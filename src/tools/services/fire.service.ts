import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
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

  getItem = ( type: String, category: String, subCategory: String,id: String) =>
    this.http.get(`${databaseUrl}/${type}/types/${category}/collection/${subCategory}/collection/`.toLocaleLowerCase()+`${id}.json`);


  getType = (type: String) => this.http.get(`${databaseUrl}/${type}.json`);

  getSubCategories = (type, category) => {
    return this.http.get(
      `${databaseUrl}/${type}/types/${category}/collection.json`
    );
  };

  getSubCategoryData = (type, category, subCategory) =>
    this.http.get(
      `${databaseUrl}/${type}/types/${category}/collection/${subCategory}/collection.json`.toLocaleLowerCase()
    );

  addPlough = (data: Plough, category: String, subCategory: String) =>
    this.db.database
      .ref(`ploughs/types/${category}/collection/${subCategory}/collection`)
      .push(data);

  addPloughCategory = (type,categoryDetails )=> {
    return this.db.database
      .ref(
        `ploughs/types/${type}/collection/${categoryDetails.name.toLowerCase()}`
      )
      .set({
        collection: [],
        description: categoryDetails.description,
        image: categoryDetails.image,
        name: categoryDetails.name,
      });
  };

  editItem = (key: String, category: String) =>
    this.http.get<Plough>(
      `${databaseUrl}/ploughs/${category}/collection/${key}.json`
    );

  removePlough = (id: String) =>
    this.db.database.ref(`ploughs/${id}`).remove(e => console.log(e.message));
}
