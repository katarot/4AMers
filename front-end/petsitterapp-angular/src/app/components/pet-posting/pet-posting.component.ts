import { Component, OnInit } from '@angular/core';
import { ServiceRequest } from '../../models/service-request.model';
import { ServiceRequestCrudService } from '../../services/service-request-crud.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pet-posting',
  templateUrl: './pet-posting.component.html',
  styleUrls: ['./pet-posting.component.css']
})
export class PetPostingComponent implements OnInit {

  serviceRequestPets: ServiceRequest[] = [];

  constructor( private srvRequestService: ServiceRequestCrudService,
    private cookieService: CookieService) { }

  ngOnInit() {
//    this.petService.getPets().subscribe(
    this.srvRequestService.getPSRequestData().subscribe(
      p => {

      this.serviceRequestPets = p;
      console.log(this.serviceRequestPets);
      console.log(this.serviceRequestPets[0].pet.user.firstName);

    });

  }

  submitOfferToSit() {
    console.log('Inside submitOfferTOSit inside pet-post.comp');

    this.srvRequestService.updatePSRequestData( ).subscribe(

    );
  }

}
