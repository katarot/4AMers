import { Component, OnInit } from '@angular/core';
import { PetCrudService } from '../../services/pet-crud.service';
import { Pet } from '../../models/pet.model';
import { UserCrudService } from '../../services/user-crud.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private petProfile: PetCrudService, private userProfile: UserCrudService) { }
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
    //   $(document).on('change', '.btn-file :file', function() {
    //     const input = $(this),
    //     label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    //     input.trigger('blah', [label]);
    //   });
    //   /*$('.btn-file :file').on('blah', function(event, label) {
    //       const input = $(this).parents('.input-group').find(':text'),
    //           log = label;
    //       if ( input.length ) {
    //           input.val(log);
    //       } else {
    //           if (log) {
    //             alert(log);
    //           }
    //       }
    //   });*/
    //   function readUserURL(input) {
    //       if (input.files && input.files[0]) {
    //           const reader = new FileReader();
    //           reader.onload = function (e) {
    //               $('#user-img-upload').attr('src', e.target.result);
    //               const f = e.target.result;
    //               $('#save').click(function() {
    //                 console.log('save clicked');
    //                 $('#profilePic').attr('src', f);
    //               });
    //           };
    //           reader.readAsDataURL(input.files[0]);
    //         }
    //     }

    //     function readPetURL(input) {
    //       if (input.files && input.files[0]) {
    //           const reader = new FileReader();
    //           reader.onload = function (e) {
    //               $('#pet-img-upload').attr('src', e.target.result);
    //               const f = e.target.result;
    //               $('#save').click(function() {
    //                 console.log('pet save clicked');
    //                 $('#petPic').attr('src', f);
    //               });
    //           };
    //           reader.readAsDataURL(input.files[0]);
    //         }
    //     }

    //   $('#userImgInp').change(function() {
    //        readUserURL(this);
    //   });

    //   $('#petImgInp').change(function() {
    //        readPetURL(this);
    //   });

    //   $('#proDescrip').change(function() {
    //     console.log('descrip changed');
    //     $('#save').click(function() {
    //       document.getElementById('actualBio').innerHTML = $('#proDescrip').val();
    //     });
    //   });

    //   $('#petDescrip').change(function() {
    //     console.log('descrip changed');
    //     $('#save').click(function() {
    //       document.getElementById('petBio').innerHTML = $('#petDescrip').val();
    //     });
    //   });

    // this.petProfile.getPetInfo().subscribe(
    //   p => {
    //     this.pets = p;
    //     this.petName = p.petName;
    //     this.petDescription = p.petDescription;
    //     this.breed = p.breed;
    //     this.needs = p.needs;
    //     this.petImage = 'https://i.imgur.com/xryepMt.jpg';

    //     this.firstName = this.pets.user.firstName;
    //     this.lastName = this.pets.user.lastName;
    //     this.bioDescription = this.pets.user.bioDescription;
    //     this.urImage = 'https://i.imgur.com/IfifZ6N.jpg';
    //     console.log(this.pets.user.id);
    //     this.userProfile.getUserInfo(this.pets.user.id).subscribe(
    //       u => {
    //         this.user = u;
    //         console.log(this.user);
    //       }
    //     );
    //   }
    // );
  }
}
