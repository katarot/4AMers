<<<<<<< HEAD
import { Component, OnInit, Input, Output } from '@angular/core';
import { ProfileComponent } from '../../profile/profile.component';
import { EventEmitter } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../../services/upload-file.service';
>>>>>>> 939f40ce875b05cf7d6bab19bcb07de7e989a883

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  @Output() bioUpdate = new EventEmitter<string>();

<<<<<<< HEAD
  constructor() { }
  bioDescription: string;

  updateBio() {
    this.bioUpdate.emit(this.bioDescription);
    console.log('inupdatebio');
  }
=======
  constructor(private upLoadService: UploadFileService) { }

  selectedFiles: FileList;
  
>>>>>>> 939f40ce875b05cf7d6bab19bcb07de7e989a883
  ngOnInit() {
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.upLoadService.uploadfile(file);
    // this.url = this.upLoadService.url;
    //     console.log(this.upLoadService.url);
}

selectFile(event){
  this.selectedFiles = event.target.files;
  
}
}
