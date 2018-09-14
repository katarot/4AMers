import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Pet } from '../../../models/pet.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  @Output() addingPet = new EventEmitter<Pet[]>();
  newPet: Pet[] = [];

  petName: string;
  petDescrip: string;
  breedDescrip: string;
  specNeeds: string;
  behaviorDescrip: string;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.petName = 'ex: mazda';
    this.petDescrip = 'ex: He\'s really fast';
    this.breedDescrip = 'ex: Hybrid between chicken, grey hound, and a mazda of course';
    this.specNeeds = 'ex: Allergic to cheese, please keep him away from it';
    this.behaviorDescrip = 'ex: Steals the remote sometimes, it\'s up to you if you want to chase him';
  }

  addClicked() {
    console.log('add button clicked');
    console.log(this.newPet);
    this.newPet.petName = this.petName;
    this.newPet.breed = this.breedDescrip;
    this.newPet.specNeeds = this.specNeeds;
    this.newPet.petDescrip = this.petDescrip;
    this.newPet.behaviour = this.behaviorDescrip;
    this.addingPet.emit(this.newPet);
  }

}
