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

  constructor(private petProfile: PetCrudService, private userProfile: UserCrudService) {}
  cookieService: CookieService;
  petList: Pet[] = [];
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

  clickMessage = '';

  // onClickMe() {
  //   const popup = document.getElementById('popUpForm');
  //   popup.classList.toggle('show');
  // }
  ngOnInit() {
    // this.cookieService.set('id', this.user.id.toString());
    // this.user.id = this.cookieService.get('id');
    this.setUserInfo();
  }

  setUserInfo() {
    this.userProfile.getUserInfo(1).subscribe(
      ui => {
        this.user = ui;
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        this.bioDescription = this.user.bioDescription;
        this.urImage = 'https://i.imgur.com/IfifZ6N.jpg';
        console.log(this.user);
        this.petProfile.getPetById(1).subscribe(
          pi => {
            // let i: number;
            this.petList[0] = pi;
            this.petList[0].petImage = 'https://i.imgur.com/xryepMt.jpg';
            this.petImage = this.petList[0].petImage;

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
