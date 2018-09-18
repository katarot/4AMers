import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { CookieService } from 'ngx-cookie-service';
import { ServiceRequestCrudService } from '../../services/service-request-crud.service';
import { ServiceRequest } from '../../models/service-request.model';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import { User } from '../../models/user.model';

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
  loggedInUser: User;
  // loggedInUser: User[] = [];
  srReplyMessage: string;
  srPetname: string;
  srDate: string;
  replyMessage: string;
  userCookieValue: string;
  // {{ ( (sr.sitter == null) ? 'El Nulo' : sr.sitter.firstName ) }}

  constructor(
    private cookieService: CookieService,
    private srvReqService: ServiceRequestCrudService,
    private navbarService: NavbarService,
    private router: Router) { }
  
  ngOnInit() {

    if (this.navbarService.isLoggedIn()) {

      console.log("ngOnInit: cookieService get user -->");
      console.log(this.cookieService.get('user'));

      this.loggedInUser = JSON.parse(this.cookieService.get('user'));
      // this.loggedInUser = 
      
      console.log('ngOnInit: loggedInUser --->');
      console.log(this.loggedInUser);

      this.srPetname = "";
      this.srDate = "";
      // this.replyMessage = "";

      this.srvReqService.getPSRequestData().subscribe(
        sr => {
          
          this.serviceRequest = sr;
          console.log("getPSRequestData: serviceRequest -> ");
          console.log(this.serviceRequest);

          // if status == PENDING   ->    background-color: #dad9d9;
          // this.srPetname = "";
          // this.srDate = "";

        }
      );
    } else {
      this.router.navigate(['/home']);
    }

  }

  setDataForPopUp(petName, srvReqObject) {
    this.srPetname = petName;
    this.srvOfferRequest = srvReqObject;
    this.srDate = srvReqObject.date;
  }

  submitOfferRequest() {

    this.srvOfferRequest.replyMessage = this.replyMessage;
    this.srvOfferRequest.status = "PENDING";
    this.srvOfferRequest.sitter = this.loggedInUser;
    
    console.log("submitOfferRequest(): srvOfferRequest ---> ");
    console.log(this.srvOfferRequest);

    this.srvReqService.updatePSRequestData(this.srvOfferRequest).subscribe(
      srOffer => {
        console.log("srOffer");
        console.log(srOffer);
      }
    );
  }
  
}
