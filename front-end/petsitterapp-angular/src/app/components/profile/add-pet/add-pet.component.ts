import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Pet } from '../../../models/pet.model';
import { User } from '../../../models/user.model';

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
    this.petname = 'ex: mazda';
    this.petdescription = 'ex: He\'s really fast';
    this.breed = 'ex: Hybrid between chicken, grey hound, and a mazda of course';
    this.needs = 'ex: Allergic to cheese, please keep him away from it';
    this.behaviour = 'ex: Steals the remote sometimes, it\'s up to you if you want to chase him';
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
