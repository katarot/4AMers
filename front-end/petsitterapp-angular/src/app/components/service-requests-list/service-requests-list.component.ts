import { Component, OnInit } from '@angular/core';
import { PetCrudService } from '../../services/pet-crud.service';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'app-service-requests-list',
  templateUrl: './service-requests-list.component.html',
  styleUrls: ['./service-requests-list.component.css']
})
export class ServiceRequestsListComponent implements OnInit {

  pets: Pet[] = [];

  constructor(private petService: PetCrudService) { }

  ngOnInit() {

    this.petService.getPets().subscribe(
      p => {
        this.pets = p;
        console.log(this.pets);
      }
    );

  }

}
