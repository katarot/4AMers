import { Component, OnInit } from '@angular/core';
import { PetCrudService } from '../../services/pet-crud.service';
import { Pet } from '../../models/pet.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-service-requests-list',
  templateUrl: './service-requests-list.component.html',
  styleUrls: ['./service-requests-list.component.css']
})
export class ServiceRequestsListComponent implements OnInit {

  pets: Pet[] = [];

  constructor(
    private petService: PetCrudService,
    private cookieService: CookieService) { }

  ngOnInit() {

    this.petService.getPets().subscribe(
      p => {
        this.pets = p;
        console.log(this.pets);
      }
    );

  }

}
