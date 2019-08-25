import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: Observable<User>;
  remember: boolean;
  oAuthProvider: GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  constructor(
    private toastR: ToastrService,
    private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }
  
  async signIn() {
    const persistence = this.remember ?
      firebase.auth.Auth.Persistence.NONE :
      firebase.auth.Auth.Persistence.SESSION;
    
    try {
      await firebase.auth().setPersistence(persistence);
      await this.firebaseAuth.auth.signInWithPopup(this.oAuthProvider);
    } catch (e) {
      this.toastR.error('Something Went Wrong!');
    }
    this.toastR.success('Login Success!');
  }
  
  async logout() {
    await this.firebaseAuth.auth.signOut();
    this.toastR.warning('Logout Success');
  }
}
