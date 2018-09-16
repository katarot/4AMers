import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { CookieService } from 'ngx-cookie-service';
import { ServiceRequestCrudService } from '../../services/service-request-crud.service';
import { ServiceRequest } from '../../models/service-request.model';

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

  constructor(private cookieService: CookieService, private srvReqService: ServiceRequestCrudService) { }

  ngOnInit() {
    
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

  }

  setDataForPopUp(petName, srvReqObject) {
    console.log("offer service btn");
    console.log(petName);
    this.srPetname = petName;

    console.log("srvReqObject");
    console.log(srvReqObject);
    this.srvOfferRequest = srvReqObject;

    // setTimeout(function() { 
    //   this.srPetname = petName;
    // }, 500); 

  }

  submitOfferRequest() {
    

    console.log(this.srvOfferRequest);
    
    // this.srvOfferRequest = {
    //   dateCreated: this.srDate,
    //   status: "PENDING", // ... or CLOSED ?
    //   description: string;
    //   replyMessage: string;

    //   pet: Pet;
    //   sitter: User;
    // };

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

    return false;

  }

}
