import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string;
  constructor(private Auth: AuthenticationService) { }

  ngOnInit() {
    this.username = localStorage.getItem('user');
  }

  logout() {
    this.Auth.logout();
    this.ngOnInit();
  }
}
