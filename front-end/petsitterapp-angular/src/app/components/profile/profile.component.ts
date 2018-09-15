import { Component, OnInit } from '@angular/core';
import { PetCrudService } from '../../services/pet-crud.service';
import { Pet } from '../../models/pet.model';
import { UserCrudService } from '../../services/user-crud.service';
import { User } from '../../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { getPackedSettings } from 'http2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private petProfile: PetCrudService,
    private userProfile: UserCrudService,
    private cookieService: CookieService) {}

  petList: Pet[] = [];
  newPetList: Pet[] = [];
  newPet: Pet;
  pets: Pet;
  petName: string;
  petDescription: string;
  breed: string;
  needs: string;
  petImage: string;
  petId: number;

  user: User;
  userid: number;
  firstName: string;
  lastName: string;
  bioDescription: string;
  urImage: string;

  ngOnInit() {

    this.user = JSON.parse(this.cookieService.get('user'));
    this.userid = this.user.id;
    this.petProfile.getPets().subscribe(
      p => {
        this.petList = p;
        let i: number;
        let count: number;
        count = 0;
        for (i = 0; i < this.petList.length; i++) {
          if (this.petList[i].user !== null && this.petList[i].user.id === this.user.id) {
            this.newPetList[count] = this.petList[i];
            count++;
          }
        }
      }
    );
    this.setUserInfo(this.userid);
    this.setPetInfo();
}

  getPet(event: any) {
    console.log(event.target.value);
    this.petId = event.target.value;
    this.changePetProfile(this.petId);
  }

  receiveUpdate($event) {
    this.bioDescription = $event;
    this.user.bioDescription = this.bioDescription;
    this.userProfile.updateUser(this.user).subscribe(
      us => {
        this.user = us;
      }
    );
  }

  receivePet($event) {
    this.newPet = $event;

    this.newPet.user = this.user;

    this.petProfile.postP5RequestData(this.newPet).subscribe(
      np => {
        this.newPet = np;
      }
    );
}

  changePetProfile(petId: number) {
    this.petProfile.getPetById(petId).subscribe(
       cp => {
         this.pets = cp;
         this.petName = this.pets.petName;
         this.breed = this.pets.breed;
         this.petDescription = this.pets.petDescription;
         this.petImage = 'https://i.imgur.com/4QxR1VP.png';
       }
    );
  }

  setUserInfo(userid: number) {
    this.userProfile.getUserInfo(userid).subscribe(
      ui => {
        this.user = ui;
        this.userid = this.user.id;
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        this.bioDescription = this.user.bioDescription;
        this.urImage = 'https://i.imgur.com/IfifZ6N.jpg';
        }
      );
    }

  setPetInfo() {
    this.petProfile.getPets().subscribe(
      pi => {
        // check if person has a pet

        this.petList = pi;
        this.petName = this.petList[0].petName;
        this.petDescription = this.petList[0].petDescription;
        this.breed = this.petList[0].breed;
        this.petImage = 'https://i.imgur.com/xryepMt.jpg';
      }
    );
  }
}
