import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  url: any;
  gobj: any;
  FOLDER = 'petpal-s3/';
  imageSrc: any;

  constructor() { }

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
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      // console.log(data)
      console.log('Successfully uploaded file.', data);
      this.url = data;
      console.log(this.url);
      console.log(this.url.Location);
      //this.cookieSrv.set(this.imageSrc, 3, 1);

      //this.http.post("76543435:89888/pictures", {pictureName: this.url.Location});

    });
  
   
    return true;
  }

  getUrl() {
    console.log('IN GET URL METHOD');
    console.log(this.url);
    return this.url;
  }
  
}