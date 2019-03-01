import { Injectable } from '@angular/core';
import { initializeApp, database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor() {
  }
  getData() {
    const shoes = database().ref('products').once('value');
    return shoes.then(snap => snap.val());
  }
  getDetail(id: string) {
    return database().ref(`products/${id}`).once('value').then(s => s.val());
  }

  addShoes(shoes, index) {
    return database().ref('products/' + index).set({
      id: index,
      img: shoes.img,
      name: shoes.name,
      price: shoes.price
    });
  }

  deleteShoes(id) {
    return database().ref('products/' + id).remove();
  }

  updateShoes(shoes) {
    const updates = {};
    updates['/products/' + shoes.id] = shoes;
    return database().ref().update(updates);
  }
}
