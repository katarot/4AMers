import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { Router } from '@angular/router';
import { UploadFileService } from './../../services/upload-file.service';
import { Observable } from 'rxjs/Observable';
import { FileUpload } from '../../models/file-upload.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myObject: FileReader;
  constructor(private upLoadService: UploadFileService, private router: Router, private loginSrv: CookieService) { }

  selectedFiles: FileList;
  username: string;
  url: any;
  imageSrc: any;
  random: any;
  n: any;
  changeFiles: any;

  showFile = false;
  fileUploads: Observable<Array<FileUpload>>;

  ngOnInit() {
    //console.log(this.loginSrv.get('username1'));
    var d = new Date();
    this.n = d.getTime();
    console.log("It is now " + this.n);
    

  }

  login() {
    this.loginSrv.set('username1', this.username, 2);
    //console.log(this.loginSrv.get('username1'));
    this.router.navigate(['/register']);

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


  showFiles(enable: boolean) {
    this.showFile = enable;
 
    if (enable) {
      this.fileUploads = this.upLoadService.getFiles();
    }
  }


  onFileChanged(event: any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL( <File> event.target.files[0]); // read file as data url
  
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
        console.log(event.target);
        

      }
    }
  }


  
}
