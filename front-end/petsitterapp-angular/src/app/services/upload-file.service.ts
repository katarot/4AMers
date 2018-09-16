import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { CookieService } from 'ngx-cookie-service';
import { Picture } from './../models/picture.model';
import { User } from './../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  url: any;
  gobj: any;
  FOLDER = 'petpal-s3/';
  imageSrc: any;
  

  constructor(private cookieSrv: CookieService) { }

  uploadfile(file) {
    let location = {};
    const bucket = new S3 (
    {
    accessKeyId: 'AKIAJZ7JSNQQZDUXWI7A',
    secretAccessKey: '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',
    region: 'us-east-2'
    }
    );

    const params = {
      Bucket: 'petpalpictures',
      Key: this.FOLDER + Math.round(Math.random()*100000000) + file.name,
      Body: file
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      let user = new User;
      // console.log(data)
      console.log('Successfully uploaded file.', data);
      this.url = data;
      console.log(this.url);
      console.log(this.url.Location);
      //user = JSON.parse(this.cookieSrv.get('user'));
      let pic = new Picture;
      pic.filepath = this.url.Location;
      pic.petId = 
      pic.userId = this.user.userId;
      this.http.post("http://localhost:8900/pictures", {pic});

    });
  
   
    return true;
  }

  getUrl() {
    console.log('IN GET URL METHOD');
    console.log(this.url);
    
    return this.url;
  }
  
}