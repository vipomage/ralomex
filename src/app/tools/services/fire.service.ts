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
export type ProductIUnion= Plough;

@Injectable({
  providedIn: 'root',
})
export class FireService {
  constructor(
    private auth: AuthService,
    private db: AngularFireDatabase,
    private http: HttpClient
  ) {}


  AdminUtils = {
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

  PloughUtils = {

    getPlough:(category:string,subCategory:string,id:string):Observable<Plough>=>
      this.getSingleItem('ploughs',category,subCategory,id),

    getPloughSubcategories:(category:string):Observable<Plough> =>
      this.getSubCategories('ploughs',category),

    getPloughTypes:()=> this.getType('ploughs'),

    deletePlough:(category:string,subCategory:string,id:string)=>
      this.removeItem('ploughs',category,subCategory,id),

    addPlough:(data:Plough,category:string,subCategory:string)=>
      this.addItem(data,'ploughs',category,subCategory),

    updatePlough:(data,category:string,subCategory:string,id:string)=>
      this.updateItem(data,'ploughs',category,subCategory,id),




  };

  getSingleItem = (type: string, category: string, subCategory: string, id: string) =>
    this.http.get<ProductIUnion>(
      `${databaseUrl}/${type}/types/${category}/collection/${subCategory}/collection/`.toLocaleLowerCase() +
        `${id}.json`
    );

  getType = (type: string) => this.http.get(`${databaseUrl}/${type}.json`);

  getSubCategories = (type: string, category: string) =>
    this.http.get<ProductIUnion>(`${databaseUrl}/${type}/types/${category}/collection.json`);

  getSubCategoryData = (type, category, subCategory) =>
    this.http.get(
      `${databaseUrl}/${type}/types/${category}/collection/${subCategory}/collection.json`.toLocaleLowerCase()
    );

  addItem = (
    data: ProductIUnion,
    type:string,
    category: string,
    subCategory: string
  ): ThenableReference =>
    this.db.database
      .ref(`${type}/types/${category}/collection/${subCategory}/collection`)
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

  updateItem = (data:ProductIUnion,type:string,category:string,subCategory:string,id:string) =>
    this.db.database.ref(`${type}/types/${category}/collection/${subCategory}/collection/${id}`).update(data);

  removeItem = (type: string, category: string, subCategory: string, id: string) =>
    this.db.database
      .ref(`${type}/types/${category}/collection/${subCategory}/collection/${id}`)
      .remove()
}

