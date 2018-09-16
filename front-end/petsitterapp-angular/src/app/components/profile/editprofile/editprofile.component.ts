import { Component, OnInit, Input, Output } from '@angular/core';
import { ProfileComponent } from '../../profile/profile.component';
import { EventEmitter } from '@angular/core';
import { UploadFileService } from '../../../services/upload-file.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  @Output() bioUpdate = new EventEmitter<string>();

  constructor(private upLoadService: UploadFileService) { }
  bioDescription: string;
  selectedFiles: FileList;
  imageSrc: any;

  updateBio() {
    this.bioUpdate.emit(this.bioDescription);
    this.upload;
    this.bioUpdate.emit(this.imageSrc);
    console.log('inupdatebio');
  }
  ngOnInit() {
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.imageSrc = this.upLoadService.uploadfile(file);
    console.log(this.imageSrc);
  }

   selectFile(event){
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles[0].name);
  }
}

