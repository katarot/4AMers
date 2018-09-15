import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Pet } from '../../../models/pet.model';
import { User } from '../../../models/user.model';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  @Output() addingPet = new EventEmitter<Pet>();
  newPet: Pet;
  petname: string;
  petdescription: string;
  breed: string;
  needs: string;
  behaviour: string;

  constructor() { }

  ngOnInit() {
  }

  addClicked() {
    console.log('add button clicked');
    this.newPet = {
      petName: this.petname,
      breed: this.breed,
      needs: this.needs,
      petDescription: this.petdescription,
      behaviour: this.behaviour,
      image: null,
      user: new User
    };

    console.log(this.newPet);

    this.addingPet.emit(this.newPet);
  }

}
