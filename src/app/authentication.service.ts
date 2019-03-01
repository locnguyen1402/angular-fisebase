import { Injectable } from '@angular/core';
import { initializeApp, database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }
  login(userInfo: any) {
    return database().ref(`user/${userInfo.username}`).once('value').then((s) => {
      // console.log(userInfo.password);
      if (s.val() == null) {
        // khong co tai khoan nay
        return false;
      } else {
        if (s.val().password.toString() === userInfo.password) {
          return true;
        } else {
          return false;
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

  isExistAccount(accountInfo) {
    return database().ref(`user/${accountInfo.username}`).once('value').then(s => s.val());
  }

  register(accountInfo) {
    return database().ref('user/' + accountInfo.username).set({
      password: accountInfo.password,
    });
  }
}
