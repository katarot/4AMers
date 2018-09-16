import { Component, OnInit } from '@angular/core';
import { PetCrudService } from '../../services/pet-crud.service';
import { Pet } from '../../models/pet.model';
import { ServiceRequest } from '../../models/service-request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceRequestCrudService } from '../../services/service-request-crud.service';
import { User } from '../../models/user.model';
import { CookieService } from 'ngx-cookie-service';
// import { Router } from '../../../../node_modules/@angular/router';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';


@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css']
})
export class ServiceRequestComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  description = 'To request a service, please fill out the form below. This site is solely intended to help pet owners find a sitter who is willing to take care of our furry friends. We are all pet lovers so please adhere to rules in the User Policy.';
  petModel: Pet;

  pets: Pet[] = [];

  // serviceRequest: ServiceRequest[] = [];
  serviceRequest: ServiceRequest;

  theDate: string;
  // theDate: string = Date.now().toString();
  petId: number;

  today: number = Date.now();

  srvReqDescription: string;

  constructor(
    private petService: PetCrudService,
    private srvRequestService: ServiceRequestCrudService,
    private navbarService: NavbarService,
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit() {
    if (!this.navbarService.isLoggedIn()) {
      this.router.navigate(['/home']);
    } else {
      // GET PET DATA TO POPULATE SELECT LIST
      this.petService.getPets().subscribe(
        p => {
          this.pets = p;
        }
      );
    }
  }


  //  CHANGE EVENT ON PET SELECT LIST
  getPet (event: any) {

    this.petModel = this.pets.filter(function(element, index, array) {

      if (element.id == event.target.value) {
        return true;
      }
      
    })[0];

  }


  //  SUBMIT PET SITTING SERVICE REQUEST
  submitSrvRequest() {

    this.serviceRequest =
    { 
      dateCreated: this.theDate,
      status: "OPEN",
      description: this.srvReqDescription,
      replyMessage: null,
      pet: this.petModel,
      // sitter: new User
      sitter: null
    };
    

    this.srvRequestService.postPSRequestData(this.serviceRequest).subscribe(
      srvReq => {
        
        console.log("data from db -> srvReq");
        console.log(srvReq);

        // this.router.navigate(["/petposting"]);
        this.router.navigate(['/sitterRequestList']);

      }
    );

    return false;

  }

}
