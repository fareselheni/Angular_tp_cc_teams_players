import { Component } from '@angular/core';
import firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyD0cyE90dcYFDn63Itj_J_WZZsAxsLKk5I",
      authDomain: "teams-players.firebaseapp.com",
      databaseURL: "https://teams-players.firebaseio.com",
      projectId: "teams-players",
      storageBucket: "teams-players.appspot.com",
      messagingSenderId: "933275543157",
      appId: "1:933275543157:web:0b860ef2baf9cc7dd13a3c",
      measurementId: "G-M1FRKTQ47N"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
