import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Plough } from '../interfaces/plough';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { News } from '../interfaces/news';
import { HomeProduct } from '../interfaces/home-product';
import { Award } from '../interfaces/award';
import { Observable } from 'rxjs';
import ThenableReference = firebase.database.ThenableReference;

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

  HomeControls = {
    addHomeProduct: (data: HomeProduct) =>
      this.db.database.ref('homeProducts').push(data),

    getHomeProducts: (): Observable<HomeProduct[]> =>
      this.http.get<HomeProduct[]>(`${databaseUrl}/homeProducts.json`),

    deleteHomeProduct: (id: string) =>
      this.db.database.ref(`homeProducts/${id}`).remove(),

    updateHomeProduct: (id: string, newValue: HomeProduct) =>
      this.db.database.ref(`homeProducts/${id}`).update(newValue),
  };

  NewsControls = {
    addNewsElement: (data: News) => this.db.database.ref('news').push(data),

    getNewsElements: (): Observable<News[]> =>
      this.http.get<News[]>(`${databaseUrl}/news.json`),

    deleteNewsElement: (id: string) =>
      this.db.database.ref(`news/${id}`).remove(),

    updateNewsElement: (id: string, newValue: News) =>
      this.db.database.ref(`news/${id}`).update(newValue),
  };

  AwardsControls = {
    addAwardElement: (data: Award) => this.db.database.ref('awards').push(data),

    getAwardElements: (): Observable<Award[]> =>
      this.http.get<Award[]>(`${databaseUrl}/awards.json`),

    deleteAwardElementById: (id: string) =>
      this.db.database.ref(`awards/${id}`).remove(),

    updateAwardElementById: (id: string, newValue: Award) =>
      this.db.database.ref(`awards/${id}`).update(newValue),
  };

  getItem = (type: string, category: string, subCategory: string, id: string) =>
    this.http.get(
      `${databaseUrl}/${type}/types/${category}/collection/${subCategory}/collection/`.toLocaleLowerCase() +
        `${id}.json`
    );

  getType = (type: string) => this.http.get(`${databaseUrl}/${type}.json`);

  getSubCategories = (type: string, category: string) =>
    this.http.get(`${databaseUrl}/${type}/types/${category}/collection.json`);

  getSubCategoryData = (type, category, subCategory) =>
    this.http.get(
      `${databaseUrl}/${type}/types/${category}/collection/${subCategory}/collection.json`.toLocaleLowerCase()
    );

  addPlough = (
    data: Plough,
    category: string,
    subCategory: string
  ): ThenableReference =>
    this.db.database
      .ref(`ploughs/types/${category}/collection/${subCategory}/collection`)
      .push(data);

  addPloughCategory = (type: string, categoryDetails) =>
    this.db.database
      .ref(
        `ploughs/types/${type}/collection/${categoryDetails.name.toLowerCase()}`
      )
      .set({
        collection: [],
        description: categoryDetails.description,
        image: categoryDetails.image,
        name: categoryDetails.name,
      });

  editItem = (key: string, category: string) =>
    this.http.get<Plough>(
      `${databaseUrl}/ploughs/${category}/collection/${key}.json`
    );

  removePlough = (id: string) =>
    this.db.database.ref(`ploughs/${id}`).remove(e => console.log(e.message));
}
