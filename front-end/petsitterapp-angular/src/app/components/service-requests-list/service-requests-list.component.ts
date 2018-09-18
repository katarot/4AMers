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
  setMyStyles: string;
  // {{ ( (sr.sitter == null) ? 'El Nulo' : sr.sitter.firstName ) }}

  // myStyles: string = "";

  constructor(
    private cookieService: CookieService,
    private srvReqService: ServiceRequestCrudService,
    private navbarService: NavbarService,
    private router: Router) { }
  
  ngOnInit() {

    if (this.navbarService.isLoggedIn()) {

      this.setMyStyles = "";

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

          this.serviceRequest.sort(function(a, b) {

            const statusOpen = a.status.toUpperCase();
            const statusPending = b.status.toUpperCase();
            
            let comparison = 0;
            if (statusOpen == 'OPEN') {
              comparison = -1;
            } else if (statusPending == 'PENDING') {
              comparison = 1;
            }
            return comparison;
          });

          // this.serviceRequest.filter(function(element, index, args) {
          //   if (element.status == 'PENDING') {

          //   //   this.myStyles('gray');
          //     console.log('pending status ' + index);

          //     // this.setMyStyles = {
          //     //   'background-color': true ? 'green' : 'transparent',
          //     //   'font-weight': true ? 'bold' : 'normal'
          //     // };
          //   }
          // });

          // if status == PENDING   ->    background-color: #dad9d9;
          // this.srPetname = "";
          // this.srDate = "";
          // this.myStyles = "{'background-color': 'lime','font-size': '20px','font-weight': 'bold'}";
          // this.myStyles = "{background-color: lime}";

        }
      );
    } else {
      this.router.navigate(['/home']);
    }

  }

  ngAfterViewInit() {
    
    console.log('after init');

    let setMyStyles = {
      'background-color': true ? 'green' : 'transparent',
      'font-weight': true ? 'bold' : 'normal'
    };

    this.serviceRequest.filter(function(element, index, args) {
      if (element.status == 'PENDING') {

      //   this.myStyles('gray');
        console.log('pending status ' + index);
        setMyStyles["background-color"] = "red"
        // setMyStyles = {
        //   'background-color': true ? 'red' : 'transparent',
        //   'font-weight': true ? 'bold' : 'normal'
        // };
      }
    });

  }

  // setMyStyles() {
  //   let styles = {
  //     // 'background-color': this.user.isExpired ? 'red' : 'transparent',
  //     // 'font-weight': this.isImportant ? 'bold' : 'normal'
  //     'background-color': true ? 'red' : 'transparent',
  //     'font-weight': true ? 'bold' : 'normal'
  //   };
  //   return styles;
  // }

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
