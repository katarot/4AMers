import { Component, OnInit } from '@angular/core';
import { PetCrudService } from '../../services/pet-crud.service';
import { Pet } from '../../models/pet.model';
import { ServiceRequest } from '../../models/service-request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceRequestCrudService } from '../../services/service-request-crud.service';
import { User } from '../../models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css']
})
export class ServiceRequestComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  petModel: Pet;
  pets: Pet[] = [];
  serviceRequest: ServiceRequest[] = [];

  theDate: string;
  petId: number;

  constructor(
    private petService: PetCrudService,
    private srvRequestService: ServiceRequestCrudService,
    private cookieService: CookieService) { }

  ngOnInit() {

    // this.srvRequestService.getPSRequestData().subscribe(
    //   psReqs => {
    //     this.serviceRequest = psReqs;
    //     console.log(this.serviceRequest);
    //     console.log(this.serviceRequest[0].id);
    //     console.log(this.serviceRequest[0].pet);
    //   }
    // );


    // GET PET DATA TO POPULATE SELECT LIST
    this.petService.getPets().subscribe(
      p => {
        this.pets = p;
      }
    );

  }


  //  CHANGE EVENT ON PET SELECT LIST
  getPet (event: any) {
    // this.petId = event.target.value;
    // console.log(this.petId);

    this.pets.filter(function(element, index, array) {

      // = event.target.value;

      // console.log(element);
      // console.log(" ---> ");
      // console.log(this.petId);

      if (element.id == event.target.value) {
        console.log('We selected this -> ');
        console.log(element);
        // this.petModel = element;
      }

    });

  }


  //  SUBMIT PET SITTING SERVICE REQUEST
  submitSrvRequest() {

    //  OPTION 1: I can call .getPetById from the service (get from the database) and get specific from Pet object
    // this.petService.getPetById(this.petId).subscribe(
    //   pet => {

    //     console.log("We are getting specific pet by id");
    //     this.petModel = pet;

    //     console.log(this.petModel);

    //   }
    // );

    //  OPTION 2: I can filter of the this.pets list
    // this.pets.filter(function(element, index, array) {
    //   // console.log("Pet ID -> " + this.petId);

    //   console.log(element);
    //   console.log(" ---> ");
    //   console.log(this.petId);

    // });


    // console.log("outside the getpetbyid fn -> ");
    // console.log(this.petModel);
    // console.log("id -> " + this.petId);
    // console.log("--> " + this.theDate);



    this.serviceRequest = [
                            { id: 1,
                              dateCreated: null,  // "2018-09-02"
                              status: "OPEN",
                              description: "Description of pet sitting service",
                              replyMessage: null,
                              pet: new Pet,//this.petModel,
                              sitter: new User
                            }
                          ];
    
    console.log("petModel -> ");
    console.log(this.petModel);

    // this.srvRequestService.postPSRequestData(this.petId, this.theDate).subscribe(
    //   srvReq => {
    //     console.log("data from db -> srvReq");
    //     console.log(srvReq);
    //   }
    // );

    return false;

  }

}
