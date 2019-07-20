import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<firebase.User>;
  remember: boolean;
  oAuthProvider: GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
  constructor(private toastR: ToastrService, private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  googleOAuth = () => {
    firebase
      .auth()
      .setPersistence(
        this.remember ? firebase.auth.Auth.Persistence.NONE : firebase.auth.Auth.Persistence.SESSION
      )
      .then(() => {
        this.firebaseAuth.auth
          .signInWithPopup(this.oAuthProvider)
          .then(() => {
            console.log('Login Success');
            this.toastR.success('Login Success');
          })
          .catch((err: ErrorEvent) => {
            console.log('Something went wrong:', err.message);
          });
      });
  };

  logout() {
    // noinspection JSIgnoredPromiseFromCall
    this.firebaseAuth.auth.signOut().then(() => this.toastR.warning('Logout Success'));
  }
}
