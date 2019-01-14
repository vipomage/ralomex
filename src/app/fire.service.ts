import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FireService {
  ploughs: any[];

  constructor(private db: AngularFireDatabase, private http: HttpClient) {}

  getPloughs = type =>
    this.http.get(`https://ralomex-34693.firebaseio.com/ploughs/${type}.json`);
}
