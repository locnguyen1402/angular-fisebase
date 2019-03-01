import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthenticationService, private router: Router) { }
  username: string;
  password: string;
  private getObj(username: string, password: string): any {
    return {
      username: this.username,
      password: this.password
    };
  }
  Login() {
    if (this.username && this.password) {
      this.Auth.login(this.getObj(this.username, this.password)).then((s) => {
        // console.log(s);
        if (s === false) {
          alert('Please check your username and password again');
        } else {
          localStorage.setItem('user', this.username);
          this.router.navigateByUrl('homepage');
        }
      });
    } else {
      alert('Please check your username and password again');
    }
  }

  ngOnInit() {
    /* if (localStorage.getItem('user') !== null) {
      this.router.navigateByUrl('homepage');
    } */
  }

}
