import { Component, OnInit, Input, Output } from '@angular/core';
import { ProfileComponent } from '../../profile/profile.component';
import { EventEmitter } from '@angular/core';
import { UploadFileService } from '../../../services/upload-file.service';
import { CookieService } from 'ngx-cookie-service';
import { Pet } from '../../../models/pet.model';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  @Output() bioUpdate = new EventEmitter<User>();

  constructor(private upLoadService: UploadFileService, private cookieService: CookieService) { }
  constructor(private upLoadService: UploadFileService) { }
  userInfo: User;
  bioDescription: string;
  errorMessage: string;
  selectedFiles: FileList;

  imageSrc: string;

  updateBio() {
    if (this.bioDescription.length > 15) {
      this.errorMessage = '';
      this.upload();
      this.userInfo = {
        username: null,
        password: null,
        firstName: null,
        lastName: null,
        email: null,
        dateRegistered: null,
        bioDescription: this.bioDescription,
        image: this.imageSrc
      };
      this.userInfo.bioDescription = this.bioDescription;
      this.userInfo.image = this.imageSrc;
      this.bioUpdate.emit(this.userInfo);
      this.bioDescription = '';
    console.log('inupdatebio');
    } else {
      this.errorMessage = 'Please use more than 15 characters';
      console.log(this.errorMessage);
    }

  }
  ngOnInit() {
    this.bioDescription = JSON.parse(this.cookieService.get('user')).bioDescription;
    console.log(this.bioDescription);
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.imageSrc = this.upLoadService.uploadfile(file);
    console.log(this.imageSrc);
  }

   selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles[0].name);
  }
}

