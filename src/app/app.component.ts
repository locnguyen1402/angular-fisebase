import { Component, OnInit } from '@angular/core';
import {initializeApp, database} from 'firebase';
import { Observable } from 'rxjs';
import { defineBase } from '@angular/core/src/render3';
import { ShoesService } from './shoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  constructor() {
    const config = {
      apiKey: 'AIzaSyCEHQe6DniMKeBNeag3nUMqwwbI9WRjo_Q',
      authDomain: 'shoesshop-ee180.firebaseapp.com',
      databaseURL: 'https://shoesshop-ee180.firebaseio.com',
      projectId: 'shoesshop-ee180',
      storageBucket: 'shoesshop-ee180.appspot.com',
      messagingSenderId: '702842267368'
    };
    initializeApp(config);
  }
  ngOnInit() {
  }
}
