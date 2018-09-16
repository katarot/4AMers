import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../models/user.model';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cookieService: CookieService, private navbarService: NavbarService) { }

  ngOnInit() {
    if (this.isLoggedIn()) {
      // console.log('user -> ' + this.cookieService.get('user'));
    }
  }

  isLoggedIn() {
    return this.navbarService.isLoggedIn();
  }

}
