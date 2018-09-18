import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Pet } from '../../../models/pet.model';
import { User } from '../../../models/user.model';
import { UploadFileService } from '../../../services/upload-file.service';
import { EditpetServiceService } from '../../../services/editpet-service.service';
import { PetCrudService } from '../../../services/pet-crud.service';


@Component({
  selector: 'app-editpetpro',
  templateUrl: './editpetpro.component.html',
  styleUrls: ['./editpetpro.component.css']
})
export class EditpetproComponent implements OnInit {

  @Output() petUpdate = new EventEmitter<Pet>();

  constructor(private upLoadService: UploadFileService, private data: EditpetServiceService,
    private petInfo: PetCrudService ) {
   }

  petUpd: Pet;
  petName: string;
  behavior: string;
  needs: string;
  petDescription: string;
  breed: string;
  petImage: string;
  petIdEdit: any;
  petId: number;

  user: User;
  selectedFiles: FileList;
  imageSrc: string;

  ngOnInit() {

  }

  upload() {
      const file = this.selectedFiles.item(0);
      this.imageSrc = this.upLoadService.uploadfile(file);
  }

   selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles[0].name);
  }

  editClicked() {
    console.log('inside clicked');
    // retrieves current pet information
    this.data.myNumber.subscribe(
      petIdEdit => {
        this.petIdEdit = petIdEdit;
      }
    );
    // sets the descriptions inside the modal to current pet Info
    this.petInfo.getPetById(this.petIdEdit).subscribe(
      cp => {
        this.petUpd = cp;
        this.petId = this.petIdEdit;
        this.petName = this.petUpd.petName;
        this.breed = this.petUpd.breed;
        this.petDescription = this.petUpd.petDescription;
        this.behavior = this.petUpd.behaviour;
        this.needs = this.petUpd.needs;
        this.petImage = this.petUpd.image;
        this.user = this.petUpd.user;
        this.imageSrc = this.petUpd.image;
       }
   );
}

  updatePet() {
    console.log(this.petImage);
    console.log(this.selectedFiles);
    if (this.selectedFiles !== undefined) {
      this.upload();
    }

    console.log(this.imageSrc);
    this.petUpd = {
      id: this.petId,
      petName: this.petName,
      behaviour: this.behavior,
      breed: this.breed,
      needs: this.needs,
      petDescription: this.petDescription,
      image: this.imageSrc,
      user: new User
    };

    this.petUpd.petName = this.petName;
    this.petUpd.behaviour = this.behavior;
    this.petUpd.needs = this.needs;
    this.petUpd.petDescription = this.petDescription;
    this.petUpd.breed = this.breed;
    if (this.imageSrc == null) {
      this.petUpd.image = this.petImage;
    } else {
      this.petUpd.image = this.imageSrc;
    }
    this.petUpd.user = this.user;
    console.log(this.petUpd);
    this.petUpdate.emit(this.petUpd);
  }
}
