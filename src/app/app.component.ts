  import {Component, OnInit} from '@angular/core';
  import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  defaultValue = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBQdOBxjKtNLtPESJcdddLsV2EJhnXSTaI',
      authDomain: 'ng5-blog.firebaseapp.com',
    });
  }

  onNavigation(selected: string) {
    this.defaultValue = selected;
  }
}
