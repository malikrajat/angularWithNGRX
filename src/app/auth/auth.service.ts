import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;
  constructor(private route: Router) { }

  singupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (token: string) => {
          this.token = token;
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        responce => {
          this.route.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      );
  }
  getToken () {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
    return this.token;
  }

  isAuthincated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
