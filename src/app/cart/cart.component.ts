import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productArray: any;
  constructor() { }

  ngOnInit() {
     this.productArray = JSON.parse(localStorage.getItem('cart')) || [];
  }
  removeCart() {
    localStorage.removeItem('cart');
  }
}
