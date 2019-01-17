import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<firebase.User>;
  remember: boolean;
  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  googleOAuth = () => {
    firebase
      .auth()
      .setPersistence(
        this.remember
          ? firebase.auth.Auth.Persistence.NONE
          : firebase.auth.Auth.Persistence.SESSION
      )
      .then(() => {
        this.firebaseAuth.auth
          .signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then(
            (): void => {
              console.log('Nice, it worked!');
            }
          )
          .catch(err => {
            console.log('Something went wrong:', err.message);
          });
      });
  };

  logout() {
    this.firebaseAuth.auth.signOut();
  }
}
