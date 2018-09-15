import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Pet } from '../../../models/pet.model';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-editpetpro',
  templateUrl: './editpetpro.component.html',
  styleUrls: ['./editpetpro.component.css']
})
export class EditpetproComponent implements OnInit {

  @Output() petUpdate = new EventEmitter<Pet>();

  constructor() { }

  petUpd: Pet;
  petName: string;
  behavior: string;
  needs: string;
  petDescription: string;
  breed: string;
  petImage: string;
  user: User;

  updatePet() {
    this.petUpd = {
      petName: this.petName,
      behaviour: this.behavior,
      breed: this.breed,
      needs: this.needs,
      petDescription: this.petDescription,
      image: this.petImage,
      user: new User
    };
    this.petUpd.petName = null;
    this.petUpd.behaviour = this.behavior;
    this.petUpd.needs = this.needs;
    this.petUpd.petDescription = this.petDescription;
    this.petUpd.breed = this.breed;
    this.petUpd.image = null;
    this.petUpd.user = null;

    this.petUpdate.emit(this.petUpd);
  }
  ngOnInit() {
  }

}
