import { Component, OnInit } from '@angular/common';
import { Pet } from '../../models/pet.model';
import { PetCrudService } from '../../services/pet-crud.service';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css']
})
export class ServiceRequestComponent implements OnInit {

  description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
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
