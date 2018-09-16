import { Component, OnInit } from '@angular/core';
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
export class ServiceRequestsListComponent implements OnInit {

  pets: Pet[] = [];
  serviceRequest: ServiceRequest[] = [];
  srvOfferRequest: ServiceRequest;
  srTime: string; // date?
  loggedInUser: string;
  srReplyMessage: string;
  srPetname: string;
  srDate: string;
  replyMessage: string;
  // {{ ( (sr.sitter == null) ? 'El Nulo' : sr.sitter.firstName ) }}

  constructor(
    private cookieService: CookieService,
    private srvReqService: ServiceRequestCrudService,
    private navbarService: NavbarService,
    private router: Router) { }

  ngOnInit() {
    if (this.navbarService.isLoggedIn()) {
      this.loggedInUser = "[logged in user]";
      this.srPetname = "";
      this.srDate ="thy date";
      // this.replyMessage = "";

      this.srvReqService.getPSRequestData().subscribe(
        sr => {
          console.log(sr);
          this.serviceRequest = sr;

        }
      );
    } else {
      this.router.navigate(['/home']);
    }

  }

  setDataForPopUp(petName, srvReqObject) {
    this.srPetname = petName;
    this.srvOfferRequest = srvReqObject;
  }

  submitOfferRequest() {
    console.log(this.srvOfferRequest);

    this.srvOfferRequest.replyMessage = this.replyMessage;
    this.srvOfferRequest.status = "PENDING";

    console.log("after");

    console.log(this.srvOfferRequest);

    this.srvReqService.updatePSRequestData(this.srvOfferRequest).subscribe(
      srOffer => {
        console.log("srOffer");
        console.log(srOffer);
      }
    );
  }
  
}
