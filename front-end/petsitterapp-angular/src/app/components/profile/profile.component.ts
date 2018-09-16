import { Component, OnInit, DoCheck } from '@angular/core';
import { PetCrudService } from '../../services/pet-crud.service';
import { Pet } from '../../models/pet.model';
import { UserCrudService } from '../../services/user-crud.service';
import { User } from '../../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { NavbarService } from '../../services/navbar.service';
import { Router } from '@angular/router';
// import { getPackedSettings } from 'http2';
// import { FormGroup,
// FormsModule,
// ReactiveFormsModule,
// FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, DoCheck {

  constructor(
    private petProfile: PetCrudService,
    private userProfile: UserCrudService,
    private cookieService: CookieService,
    private navbarService: NavbarService,
    private router: Router) {}

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
  behaviors: string[];

  user: User;
  userid: number;
  firstName: string;
  lastName: string;
  bioDescription: string;
  urImage: string;

  ngOnInit() {
    console.log('in ngOnInit profile.components');
    if (this.navbarService.isLoggedIn()) {
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
      this.setPetInfo(this.userid);
    }
  }

  ngDoCheck() {
    if (!this.navbarService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  changePet($event) {
    console.log('changing PET INFO');
    this.pets = $event;
    this.pets.user = this.user;
    this.pets.petName = this.petName;

    console.log(this.pets);
  }

  getPet(event: any) {
    console.log(event.target.value);
    this.petId = event.target.value;
    this.changePetProfile(this.petId);
  }

  receiveUpdate($event) {
    this.bioDescription = $event;
    this.user.bioDescription = this.bioDescription;
    console.log(this.user);
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
         this.petImage = this.pets.image;
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
        this.urImage = this.user.image;
        }
      );
    }

  setPetInfo(userid: number) {
    this.petProfile.getPets().subscribe(
      pi => {
        // check if person has a pet
        // meaning pass their information in and check pet -> user id
        this.userid = userid;
        this.petList = pi;
        let i: number;
        let count: number;
        count = 0;
        for (i = 0; i < this.petList.length; i++) {
          if (this.petList[i].user !== null && this.petList[i].user.id === this.user.id) {
            this.newPetList[count] = this.petList[i];
            count++;
          }
        }
        if (this.newPetList[0] !== undefined) {
          this.petName = this.newPetList[0].petName;
          this.petDescription = this.newPetList[0].petDescription;
          this.breed = this.newPetList[0].breed;
          this.petImage = this.newPetList[0].image;
        }
      }
    );
  }
}
