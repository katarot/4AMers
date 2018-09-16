import { Component, OnInit, DoCheck } from '@angular/core';
import { ServiceRequest } from '../../models/service-request.model';
import { ServiceRequestCrudService } from '../../services/service-request-crud.service';
import { CookieService } from 'ngx-cookie-service';
import { NavbarService } from '../../services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-posting',
  templateUrl: './pet-posting.component.html',
  styleUrls: ['./pet-posting.component.css']
})
export class PetPostingComponent implements OnInit, DoCheck {

  serviceRequestPets: ServiceRequest[] = [];

  constructor(
    private srvRequestService: ServiceRequestCrudService,
    private cookieService: CookieService,
    private router: Router,
    private navbarService: NavbarService) { }

  ngOnInit() {
//    this.petService.getPets().subscribe(
    this.srvRequestService.getPSRequestData().subscribe(
      p => {

      this.serviceRequestPets = p;
      console.log(this.serviceRequestPets);
      console.log(this.serviceRequestPets[0].pet.user.firstName);

    });

  }

  ngDoCheck() {
    if (!this.navbarService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  submitOfferToSit() {
    console.log('Inside submitOfferTOSit inside pet-post.comp');
    console.log(this.serviceRequestPets);
    this.srvRequestService.updatePSRequestData( ).subscribe(

    );
  }

}
