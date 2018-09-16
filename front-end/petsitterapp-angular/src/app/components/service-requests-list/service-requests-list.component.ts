import { Component, OnInit, DoCheck } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { CookieService } from 'ngx-cookie-service';
import { ServiceRequestCrudService } from '../../services/service-request-crud.service';
import { ServiceRequest } from '../../models/service-request.model';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-service-requests-list',
  templateUrl: './service-requests-list.component.html',
  styleUrls: ['./service-requests-list.component.css']
})
export class ServiceRequestsListComponent implements OnInit, DoCheck {

  pets: Pet[] = [];
  serviceRequest: ServiceRequest[] = [];

  constructor(
    private cookieService: CookieService,
    private srvReqService: ServiceRequestCrudService,
    private navbarService: NavbarService,
    private router: Router) { }

  ngOnInit() {
    if (this.navbarService.isLoggedIn()) {
      this.srvReqService.getPSRequestData().subscribe(
        sr => {
          console.log(sr);
          this.serviceRequest = sr;
        }
      );
    }
  }

  ngDoCheck() {
    if (!this.navbarService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

}
