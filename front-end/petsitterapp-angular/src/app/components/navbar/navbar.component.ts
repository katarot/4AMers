import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
  user: User;
  // loggedIn = false;
  // loggedIn: boolean = this.cookieService.check('user');
  loggedIn: boolean = this.cookieService.check('user');

  ngOnInit() {
    this.loggedIn = this.cookieService.check('user');
    console.log(this.loggedIn);
    console.log(this.cookieService.get('user'));
  }

}
