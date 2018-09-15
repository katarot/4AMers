import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../models/user.model';
import { NavbarService } from '../../services/navbar.service'; // 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cookieService: CookieService, private navbarService: NavbarService) { }
  // user: User;
  // loggedIn = false;
  // loggedIn: boolean = this.cookieService.check('user');
  // loggedIn: boolean = this.cookieService.check('user');

  ngOnInit() {
    // this.loggedIn = this.cookieService.check('user');
    console.log('loggedIn -> ' + this.isLoggedIn());
    if (this.isLoggedIn()) {
      console.log('user -> ' + this.cookieService.get('user'));
    }
  }

  isLoggedIn() {
    // this.loggedIn = this.cookieService.check('user');
    // console.log('loggedIn -> ' + this.loggedIn);
    // return this.loggedIn;
    return this.navbarService.isLoggedIn();
  }

}
