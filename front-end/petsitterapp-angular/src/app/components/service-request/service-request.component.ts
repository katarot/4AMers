import { Component, OnInit } from '@angular/core';
import { PetCrudService } from '../../services/pet-crud.service';
import { Pet } from '../../models/pet.model';
import { ServiceRequest } from '../../models/service-request.model';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ServiceRequestCrudService } from '../../services/service-request-crud.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css']
})
export class ServiceRequestComponent implements OnInit {

  description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  pets: Pet[] = [];
  serviceRequest: ServiceRequest[] = [];
  
  theDate: string;
  petId: number;
  
  constructor(private petService: PetCrudService, private srvRequestService: ServiceRequestCrudService) { }

  ngOnInit() {

    this.srvRequestService.getPSRequestData().subscribe(
      psReqs => {
        this.serviceRequest = psReqs;
        console.log(this.serviceRequest);
        console.log(this.serviceRequest[0].id);
        console.log(this.serviceRequest[0].pet);
      }
    );

    
    // GET PET DATA TO POPULATE SELECT LIST
    this.petService.getPets().subscribe(
      p => {
        this.pets = p;
        console.log(this.pets);
      }
    );
    
  }


  //  CHANGE EVENT ON PET SELECT LIST
  getPet (event: any) {
    this.petId = event.target.value;
  }


  //  SUBMIT PET SITTING SERVICE REQUEST
  submitSrvRequest() {

    //  OPTION 1: I can call .getPetById from the service (get from the database) and get specific from Pet object
    this.petService.getPetById(this.petId).subscribe(
      pet => {
        console.log("We are getting specific pet by id");
        // console.log("We are getting specific pet by id");
      }
    );

    //  OPTION 2: I can filter of the this.pets list
    /*this.pets.filter(
      pet => {
        
      }
    );*/
    

    console.log("id -> " + this.petId);
    console.log("--> " + this.theDate);

    this.serviceRequest = [
                            { id: 1,
                              dateCreated: null,  // "2018-09-02"
                              status: "OPEN",
                              description: "Description of pet sitting service",
                              replyMessage: null,
                              pet: new Pet,
                              sitter: new User
                            }
                          ];

    this.srvRequestService.postPSRequestData(this.petId, this.theDate);//.subscribe(
    //   s => {
    //     console.log("data from db");
    //     console.log(p);
    //   }
    // );

    return false;

  }

}
