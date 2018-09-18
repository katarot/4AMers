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
  userInfo: User;
  bioDescription: string;
  errorMessage: string;
  selectedFiles: FileList;
  fileSelected = false;
 
  imageSrc: string;
 
  ngOnInit() {
    this.bioDescription = JSON.parse(this.cookieService.get('user')).bioDescription;
    console.log(this.bioDescription);
  }

  updateBio() {
    if (this.bioDescription.length > 15) {
      this.errorMessage = '';
      if (this.fileSelected) {
        this.upload();
        
        // this.userInfo.image = this.imageSrc;
        // if (!this.selectedFiles == null || !this.selectedFiles == undefined){
          // this.upload();
        }
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
        
        this.userInfo.image = this.imageSrc;

      this.userInfo.bioDescription = this.bioDescription;
      // console.log(‘user -> ’ + this.cookieService.get(‘user’));
      const u = JSON.parse(this.cookieService.get('user'));
      u.bioDescription = this.bioDescription;
      this.cookieService.set('user', JSON.stringify(u));
      // console.log(‘setting bioDescription’);
      // console.log(‘user -> ’ + this.cookieService.get(‘user’));
      // this.userInfo.image = this.imageSrc;
      this.bioUpdate.emit(this.userInfo);
      // this.bioDescription = ‘’;
    console.log('inupdatebio');
    location.reload();
    } else {
      this.errorMessage = 'Please use more than 15 characters';
      console.log(this.errorMessage);
    }

  }

  upload() {
    // if (this.fileSelected) {
      const file = this.selectedFiles.item(0);
      this.imageSrc = this.upLoadService.uploadfile(file);
      console.log(this.imageSrc);
    // } else {
    //   const file = this.userInfo.image;
    //   this.imageSrc = this.upLoadService.uploadfile(file);
    //   console.log(this.imageSrc);
    // }
  }

  selectFile(event) {
    this.fileSelected = true;
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles[0].name);
  }
}

