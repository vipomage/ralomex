import ThenableReference = firebase.database.ThenableReference;
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../../environments/environment';
import { HomeProduct } from '../interfaces/home-product';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project'
import { Plough } from '../interfaces/plough';
import { AuthService } from './auth.service';
import { Award } from '../interfaces/award';
import { Injectable } from '@angular/core';
import { News } from '../interfaces/news';
import { Observable } from 'rxjs';

const databaseUrl: String = environment.firebase.databaseURL;

export type IUnion = Award|Project|News|HomeProduct;

@Injectable({
  providedIn: 'root',
})
export class FireService {
  constructor(
    private auth: AuthService,
    private db: AngularFireDatabase,
    private http: HttpClient
  ) {}


  Util = {
    addElement: (
      data: IUnion,
      dbLocation: 'awards' | 'news' | 'homeProducts' | 'projects'
    ) => this.db.database.ref(dbLocation).push(data).then(()=>{
      //Notification
    }),

    getElements: (
      elementType: 'awards' | 'news' | 'homeProducts' | 'projects'
    ):Observable<IUnion> =>
      this.http.get<IUnion>(
        `${databaseUrl}/${elementType}.json`
      ),

    deleteElementById: (
      id: string,
      elementType: 'awards' | 'news' | 'homeProducts' | 'projects'
    ) => this.db.database.ref(`${elementType}/${id}`).remove().then(()=>{
      //Notification
    }),

    updateElementById: (
      id: string,
      elementType: 'awards' | 'news' | 'homeProducts' | 'projects',
      newValue: IUnion
    ) => this.db.database.ref(`${elementType}/${id}`).update(newValue).then(()=>{
      //Notification
    }),
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

