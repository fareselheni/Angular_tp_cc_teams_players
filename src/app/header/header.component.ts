import {Component, OnDestroy, OnInit} from '@angular/core';
import firebase from "firebase";

import {AuthService} from "../services/auth.service";
import {Observable, Subscription} from "rxjs";
import "rxjs-compat/add/observable/interval";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy {

  isAuth: boolean;
  secondes: number;
  counterSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      }
    );
  }
  onSignOut(){
    this.authService.signOutUser();

  }
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
