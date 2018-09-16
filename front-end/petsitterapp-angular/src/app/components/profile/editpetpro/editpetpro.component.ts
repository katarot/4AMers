import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Pet } from '../../../models/pet.model';
import { User } from '../../../models/user.model';
import { UploadFileService } from '../../../services/upload-file.service';


@Component({
  selector: 'app-editpetpro',
  templateUrl: './editpetpro.component.html',
  styleUrls: ['./editpetpro.component.css']
})
export class EditpetproComponent implements OnInit {

  @Output() petUpdate = new EventEmitter<Pet>();

  constructor(private upLoadService: UploadFileService) { }

  petUpd: Pet;
  petName: string;
  behavior: string;
  needs: string;
  petDescription: string;
  breed: string;
  petImage: string;
  user: User;

  selectedFiles: FileList;
  imageSrc: any;

  upload() {
    const file = this.selectedFiles.item(0);
    this.imageSrc = this.upLoadService.uploadfile(file);
    console.log(this.imageSrc);
  }

   selectFile(event){
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles[0].name);
  }


  updatePet() {
    this.upload;
    this.petUpd = {
      petName: this.petName,
      behaviour: this.behavior,
      breed: this.breed,
      needs: this.needs,
      petDescription: this.petDescription,
      image: this.imageSrc,
      user: new User
    };
    this.petUpd.petName = null;
    this.petUpd.behaviour = this.behavior;
    this.petUpd.needs = this.needs;
    this.petUpd.petDescription = this.petDescription;
    this.petUpd.breed = this.breed;
    this.petUpd.image = this.imageSrc;
    this.petUpd.user = null;

    this.petUpdate.emit(this.petUpd);
  }
  ngOnInit() {
  }

}
