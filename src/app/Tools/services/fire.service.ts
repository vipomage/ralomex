import ThenableReference = firebase.database.ThenableReference;
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PloughCategory } from '../interfaces/plough-category';
import { CatalogProduct } from '../interfaces/catalogProduct';
import { DatabaseSchema, DisksSchema, IUnion, PloughsSchema, ProductIUnion } from '../interfaces/DatabaseSchema';

const databaseUrl: string = environment.firebase.databaseURL;

@Injectable({
  providedIn: 'root',
})
export class FireService {
  DATABASE: DatabaseSchema;
  productTypes: {
    disks: DisksSchema;
    ploughs: PloughsSchema;
  };

  constructor(
    private auth: AuthService,
    private db: AngularFireDatabase,
    private http: HttpClient
  ) {}

  AdminUtils = {
    addElement: (data: IUnion, dbLocation: 'awards' | 'news' | 'homeProducts' | 'projects') =>
      this.db.database
        .ref(dbLocation)
        .push(data)
        .then(() => {
          //Notification
        }),

    getElements: (
      elementType: 'awards' | 'news' | 'homeProducts' | 'projects'
    ): Observable<IUnion> => this.http.get<IUnion>(`${databaseUrl}/${elementType}.json`),

    deleteElementById: (id: string, elementType: 'awards' | 'news' | 'homeProducts' | 'projects') =>
      this.db.database
        .ref(`${elementType}/${id}`)
        .remove()
        .then(() => {
          //Notification
        }),

    updateElementById: (
      id: string,
      elementType: 'awards' | 'news' | 'homeProducts' | 'projects',
      newValue: IUnion
    ) =>
      this.db.database
        .ref(`${elementType}/${id}`)
        .update(newValue)
        .then(() => {
          //Notification
        }),
  };

  PloughUtils = {
    getPlough: (category: string, series: string, id: string): Observable<ProductIUnion> =>
      this.getSingleItem('ploughs', category, series, id),

    getPloughSubcategories: (category: string): Observable<ProductIUnion> =>
      this.getSubCategories('ploughs', category),

    getPloughTypes: () => this.getType('ploughs'),

    deletePlough: (category: string, series: string, id: string) =>
      this.removeItem('ploughs', category, series, id),

    addPlough: (data: ProductIUnion, category: string, series: string) =>
      this.addItem(data, 'ploughs', category, series),

    updatePlough: (data, category: string, series: string, id: string) =>
      this.updateItem(data, 'ploughs', category, series, id),

    getCategorySet: (category: string, series: string): Observable<PloughCategory> =>
      this.http.get<PloughCategory>(
        `${databaseUrl}/ploughs/types/${category}/series/${series}.json`
      ),
  };
  
  ProductUtils = {
    getProduct: (product:string,category: string, series: string, id: string): Observable<ProductIUnion> =>
      this.getSingleItem(product, category, series, id),
    
    addItem: (product:string,data: ProductIUnion, category: string, series: string) =>
      this.addItem(data, product, category, series),
  
    getPloughSubcategories: (category: string): Observable<ProductIUnion> =>
      this.getSubCategories('ploughs', category),
  
    getPloughTypes: () => this.getType('ploughs'),
  
    deletePlough: (category: string, series: string, id: string) =>
      this.removeItem('ploughs', category, series, id),
  
    updatePlough: (data, category: string, series: string, id: string) =>
      this.updateItem(data, 'ploughs', category, series, id),
  
    getCategorySet: (category: string, series: string): Observable<PloughCategory> =>
      this.http.get<PloughCategory>(
        `${databaseUrl}/ploughs/types/${category}/series/${series}.json`
      ),
  };

  async initCategories() {
    if (!this.DATABASE) {
      this.DATABASE = await this.initDB();
    }
    const products = Object.keys(environment.headers);

    const newObj = {};
    products.map((productType: string) => {
      newObj[productType] = this.DATABASE[productType];
    });

    this.productTypes = <{ disks: DisksSchema; ploughs: PloughsSchema }>newObj;
  }

  initDB():Promise<DatabaseSchema> {
    return this.http.get<DatabaseSchema>(`${databaseUrl}/.json`).toPromise();
  }

  getCatalog = async (): Promise<CatalogProduct> => {
    return {
      ploughs: Object.keys(await this.http.get(`${databaseUrl}/ploughs/types.json`).toPromise()),
      disks: Object.keys(await this.http.get(`${databaseUrl}/disks/types.json`).toPromise()),
      // cultivators: Object.keys(await this.http.get(`${databaseUrl}/cultivators/types.json`).toPromise()),
    };
  };

  getSingleItem = (type: string, category: string, series: string, id: string) =>
    this.http.get<ProductIUnion>(
      `${databaseUrl}/${type}/types/${category}/series/${series}/collection/`.toLocaleLowerCase() +
        `${id}.json`
    );

  getType = (type: string) => this.http.get(`${databaseUrl}/${type}.json`);

  getSubCategories = (type: string, category: string) =>
    this.http.get<ProductIUnion>(`${databaseUrl}/${type}/types/${category}/series.json`);

  getseriesData = (type, category, series) =>
    this.http.get(
      `${databaseUrl}/${type}/types/${category}/series/${series}/collection.json`.toLocaleLowerCase()
    );

  addItem = (
    data: ProductIUnion,
    productType: string,
    type: string,
    series: string
  ): ThenableReference =>
    this.db.database.ref(`${productType}/types/${type}/series/${series}/collection`).push(data);

  addPloughCategory = (type: string, categoryDetails) =>
    this.db.database
      .ref(`ploughs/types/${type}/collection/${categoryDetails.name.toLowerCase()}`)
      .set({
        collection: [],
        description: categoryDetails.description,
        image: categoryDetails.image,
        name: categoryDetails.name,
      });

  updateItem = (data: ProductIUnion, type: string, category: string, series: string, id: string) =>
    this.db.database
      .ref(`${type}/types/${category}/series/${series}/collection/${id}`)
      .update(data);

  removeItem = (type: string, category: string, series: string, id: string) =>
    this.db.database.ref(`${type}/types/${category}/series/${series}/collection/${id}`).remove();
}
