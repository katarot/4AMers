import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Pet } from '../../../models/pet.model';
import { User } from '../../../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { UploadFileService } from '../../../services/upload-file.service';


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

  selectedFiles: FileList;
  imageSrc: any;

  constructor(private upLoadService: UploadFileService) { }

  ngOnInit() {
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.imageSrc = this.upLoadService.uploadfile(file);
    console.log(this.imageSrc);
    // this.imageSrc needs to be put in with the user object and sent back to the database
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles[0].name);
  }


  addClicked() {
    console.log('add button clicked');
    if (this.selectedFiles !== undefined) {
      this.upload();
    }

    this.newPet = {
      petName: this.petname,
      breed: this.breed,
      needs: this.needs,
      petDescription: this.petdescription,
      behaviour: this.behaviour,
      image: this.imageSrc,
      user: new User
    };

    console.log(this.newPet);

    this.addingPet.emit(this.newPet);
  }

}
