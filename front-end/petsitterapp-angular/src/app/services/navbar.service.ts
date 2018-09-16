import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private cookieService: CookieService) { }

  loggedIn: boolean = this.cookieService.check('user');

  isLoggedIn(): boolean {
    this.loggedIn = this.cookieService.check('user');
    // console.log('loggedIn -> ' + this.loggedIn);
    return this.loggedIn;
  }

}
