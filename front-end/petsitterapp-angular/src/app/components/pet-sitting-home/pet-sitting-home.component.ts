import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavbarService } from '../../services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-sitting-home',
  templateUrl: './pet-sitting-home.component.html',
  styleUrls: ['./pet-sitting-home.component.css']
})
export class PetSittingHomeComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  description = 'If you are looking for someone to take care of your furry, click "Request Service" button to create a submit a request to the community. If you are looking to offer your pet sitting services, then click the "View Service Requests" to offer your services.';

  constructor(
    private cookieService: CookieService,
    private navbarService: NavbarService,
    private router: Router) { }

  ngOnInit() {
    if (!this.navbarService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
    console.log(this.cookieService.get('user'));
  }

}
