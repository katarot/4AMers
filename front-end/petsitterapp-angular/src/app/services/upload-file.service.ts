import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { CookieService } from 'ngx-cookie-service';
import { Picture } from './../models/picture.model';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  url: any;
  gobj: any;
  FOLDER = 'petpal-s3/';
  imageSrc: any;

  constructor(private cookieSrv: CookieService) { }

  getS3Bucket(): any {
    const bucket = new S3 (
    {
    accessKeyId: 'AKIAJZ7JSNQQZDUXWI7A',
    secretAccessKey: '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',
    region: 'us-east-2'
    }
    );
    return bucket;
  }

  uploadfile(file) {
   const params = {
      Bucket: 'petpalpictures',
      Key: this.FOLDER + Math.floor(Math.random() * 10000000000) + file.name ,
      Body: file,
      ACL: 'public-read'
    };

    let upResult = this.getS3Bucket().upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      console.log(params);

      return true;
    });
    console.log(upResult.failed);
    if (!upResult.failed) {
      console.log('upload successful');
      this.url = 'https://s3.us-east-2.amazonaws.com/petpalpictures/' + params.Key;
    } else {
      console.log('upload failed');
    }

    console.log('BEFORE RETURNING, this.url is: ' + this.url);
    return this.url;
  }

}
