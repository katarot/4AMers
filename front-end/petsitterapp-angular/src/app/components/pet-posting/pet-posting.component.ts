import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { PetCrudService } from '../../services/pet-crud.service';
import { ServiceRequestCrudService } from '../../services/service-request-crud.service';

@Component({
  selector: 'app-pet-posting',
  templateUrl: './pet-posting.component.html',
  styleUrls: ['./pet-posting.component.css']
})
export class PetPostingComponent implements OnInit {

  pets: Pet[] = [];

  constructor(private petService: PetCrudService, private srvRequestService: ServiceRequestCrudService) { }

  ngOnInit() {
    this.petService.getPets().subscribe(
      p => {

      this.pets = p;
      console.log(this.pets);

    });

  }

  submitOfferToSit() {
    console.log('Inside submitOfferTOSit inside pet-post.comp');

    this.srvRequestService.updatePSRequestData( ).subscribe(

    );
  }

}
