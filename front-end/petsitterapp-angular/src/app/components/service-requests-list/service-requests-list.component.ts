import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { CookieService } from 'ngx-cookie-service';
import { ServiceRequestCrudService } from '../../services/service-request-crud.service';
import { ServiceRequest } from '../../models/service-request.model';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import { User } from '../../models/user.model';
import { UserCrudService } from '../../services/user-crud.service';

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
  myColor: string;
  // statusIs: boolean;
  // {{ ( (sr.sitter == null) ? 'El Nulo' : sr.sitter.firstName ) }}
  name: string;
  email: string;
  image: string;
  bio: string;

  // myStyles: string = "";

  constructor(
    private cookieService: CookieService,
    private srvReqService: ServiceRequestCrudService,
    private userService: UserCrudService,
    private navbarService: NavbarService,
    private router: Router) { }
  
  ngOnInit() {

    if (this.navbarService.isLoggedIn()) {

      // this.setMyStyles = "black";


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

          this.serviceRequest.filter(function(element, index, args) {
            if (element.status == 'PENDING') {
              // this.statusIs = true;
            //   this.myStyles('gray');
              console.log('pending status ' + index);

              // this.setMyStyles = {
              //   'background-color': true ? 'green' : 'transparent',
              //   'font-weight': true ? 'bold' : 'normal'
              // };

              // 'darkorchid'

            }
          });

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
    // if (this.statusIs) this.myColor = "black";
    // else this.myColor = "blue";

    this.myColor = "white";
    console.log('after init');

    let setMyStyles = {
      'background-color': true ? 'green' : 'transparent',
      'font-weight': true ? 'bold' : 'normal'
    };

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

  /// GET PUBLIC USER INFO
  getPublicUserInfo(srObject) {
    console.log('this.loggedInUser');
    console.log(this.loggedInUser);
    console.log('srObject');
    console.log(srObject);

    this.name = srObject.pet.user.firstName + " " + srObject.pet.user.lastName;
    this.email = srObject.pet.user.email;
    this.image = srObject.pet.user.image;
    this.bio = srObject.pet.user.bioDescription;

    // this.userService.getUserInfo().subscribe(
    //   usr => {

    //   }
    // );

  }
  
  
}
