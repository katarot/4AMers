import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../../services/upload-file.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(private upLoadService: UploadFileService) { }

  selectedFiles: FileList;
  
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
