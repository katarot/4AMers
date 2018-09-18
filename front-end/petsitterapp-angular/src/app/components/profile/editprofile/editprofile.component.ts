import { Component, OnInit, Input, Output } from '@angular/core';
import { ProfileComponent } from '../../profile/profile.component';
import { EventEmitter } from '@angular/core';
import { UploadFileService } from '../../../services/upload-file.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  @Output() bioUpdate = new EventEmitter<string>();

  constructor(private upLoadService: UploadFileService, private cookieService: CookieService) { }
  bioDescription: string;
  selectedFiles: FileList;
  imageSrc: any;
  picSelected = false;

  updateBio() {
    console.log(this.selectedFiles);
    this.bioUpdate.emit(this.bioDescription);
    // if (this.picSelected) {
      this.upload(); // this.upload;
    // }
    this.bioUpdate.emit(this.imageSrc);
    console.log('inupdatebio');
    // location.reload();
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
    this.picSelected = true;
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles[0].name);
  }
}

