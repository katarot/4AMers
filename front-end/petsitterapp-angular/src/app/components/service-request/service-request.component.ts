import { Component, OnInit } from '@angular/core';
import { PetCrudService } from '../../services/pet-crud.service';
import { Pet } from '../../models/pet.model';
import { ServiceRequest } from '../../models/service-request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceRequestCrudService } from '../../services/service-request-crud.service';
import { User } from '../../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css']
})
export class ServiceRequestComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  petModel: Pet;

  pets: Pet[] = [];
  
  // serviceRequest: ServiceRequest[] = [];
  serviceRequest: ServiceRequest;
  
  theDate: string;
  petId: number;

  srvReqDescription: string;
  
  constructor(private petService: PetCrudService, private srvRequestService: ServiceRequestCrudService,
              private router: Router) { }

  ngOnInit() {
    
    // GET PET DATA TO POPULATE SELECT LIST
    this.petService.getPets().subscribe(
      p => {
        this.pets = p;
      }
    );

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
        dateCreated: this.theDate,  // "2018-09-02"
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

        this.router.navigate(["/dariusComponent"]);

      }
    );

    return false;

  }

}
