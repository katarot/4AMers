import { Component, OnInit } from '@angular/core';
import { PetCrudService } from '../../services/pet-crud.service';
import { Pet } from '../../models/pet.model';
import { ServiceRequest } from '../../models/service-request.model';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ServiceRequestCrudService } from '../../services/service-request-crud.service';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css']
})
export class ServiceRequestComponent implements OnInit {

  description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  pets: Pet[] = [];
  serviceRequest: ServiceRequest;
  
  theDate: string;
  petId: number;
  
  constructor(private petService: PetCrudService, private srvRequestService: ServiceRequestCrudService) { }

  ngOnInit() {

    this.srvRequestService.getPSRequestData().subscribe(
      psReqs => {
        console.log(psReqs);
      }
    );

    // Get Pet data to populate pet select list
    this.petService.getPets().subscribe(
      p => {
        this.pets = p;
        console.log(this.pets);
      }
    );
    
  }

  getPet (event: any) { // from pet select
    this.petId = event.target.value;
  }

  submitSrvRequest() {

    // We should be using serviceRequest model, ... but for now let's just pass parameters into the service

    console.log("id -> " + this.petId);
    console.log("--> " + this.theDate);

    this.srvRequestService.postPSRequestData(this.petId, this.theDate);//.subscribe(
    //   s => {
    //     console.log("data from db");
    //     console.log(p);
    //   }
    // );

    return false;

  }

}
