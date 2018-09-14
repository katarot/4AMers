import { Component, OnInit } from '@angular/core';
import { PetCrudService } from '../../services/pet-crud.service';
import { Pet } from '../../models/pet.model';
import { UserCrudService } from '../../services/user-crud.service';
import { User } from '../../models/user.model';
import { CookieService } from 'ngx-cookie-service';


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
  pets: Pet;
  petName: string;
  petDescription: string;
  breed: string;
  needs: string;
  petImage: string;

  user: User;
  userid: number;
  firstName: string;
  lastName: string;
  bioDescription: string;
  urImage: string;

  // onClickMe() {
  //   const popup = document.getElementById('popUpForm');
  //   popup.classList.toggle('show');
  // }
  ngOnInit() {
    // this.cookieService.set('id', this.user.id.toString());
    // this.user.id = this.cookieService.get('id');
    this.setUserInfo();
  }

  // receiveUpdate($event) {
  //   console.log('in receive update');
  //   this.bioDescription = $event;
  //   this.petProfile.getPetById(1).subscribe(
  //     p => {
  //       this.pets = p;
  //       this.petName = p.petName;
  //       this.petDescription = p.petDescription;
  //       this.breed = p.breed;
  //       this.needs = p.needs;
  //       this.petImage = 'https://i.imgur.com/xryepMt.jpg';

  //       this.firstName = this.pets.user.firstName;
  //       this.lastName = this.pets.user.lastName;
  //       this.urImage = 'https://i.imgur.com/IfifZ6N.jpg';
  //       this.pets.user.bioDescription = this.bioDescription;

  //       console.log(this.pets.user.bioDescription);
  //       this.userProfile.changeUserDescrip(this.pets.user.id, this.pets.user).subscribe(
  //         u => {
  //           this.bioDescription = this.pets.user.bioDescription;
  //         }
  //       );
  //       console.log(this.pets.user.id);
  //     }
  //   );
  // }

  // receivePet($event) {
  //     console.log('in receive update');
  //     this.newPet = $event;
  //     console.log(this.newPet);
  //     this.newPet.user = this.pets.user.id;
  //     console.log(this.newPet.user);
  //   //   this.petProfile.addNewPet(this.newPet.user.id, this.newPet).subscribe(

  //   // );

  // }

  setUserInfo() {
    this.userProfile.getUserInfo(1).subscribe(
      ui => {
        this.user = ui;
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        this.bioDescription = this.user.bioDescription;
        this.urImage = 'https://i.imgur.com/IfifZ6N.jpg';
        console.log(this.user);
        this.petProfile.getPets().subscribe(
          pi => {
            // let i: number;
            this.petList = pi;
            // this.petImage = this.petList[0].petImage;
            console.log(this.petList);
            this.newPetList = this.petList.filter(function(element, index, array) {
              // this.petImage = 'https://i.imgur.com/xryepMt.jpg';
              // this.element[0].petImage = 'https://i.imgur.com/xryepMt.jpg';
              // this.newPetImage = this.element[0].petImage;

              // find all pets that have the user_id of 1
              if (element.user !== null) {
                if (element.user.id === 1) {
                  return true;
                }
              }
            }
          );
          console.log(this.newPetList);
            // for (i = 0; i < 2; i++) {
            //   this.petList[i] = pi;
            //   this.pets = this.petList[i];
            //   console.log(this.pets);
            // }
          }
        );
      }
    );
  }
}
