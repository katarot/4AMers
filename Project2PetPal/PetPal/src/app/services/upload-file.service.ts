import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FileUpload } from './../models/file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  url: string;
  gobj: any;
  FOLDER = 'petpal-s3/';
  imageSrc: any;
  myVar: any;

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
      Key: this.FOLDER + Math.floor(Math.random()*10000000000) + file.name ,
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
    if(!upResult.failed) {
      console.log('upload successful');
      this.url = 'https://s3.us-east-2.amazonaws.com/petpalpictures/' + params.Key;
    } else {
      console.log('upload failed');
    }
    
    console.log('BEFORE RETURNING, this.url is: ' + this.url);
    return this.url;
  }
 
  getFiles(): Observable<Array<FileUpload>> {
    const fileUploads = new Array<FileUpload>();
 
    const params = {
      Bucket: 'petpalpictures',
      Prefix: this.FOLDER
    };
 
    this.getS3Bucket().listObjects(params, function (err, data) {
      if (err) {
        console.log('There was an error getting your files: ' + err);
        return;
      }
 
      console.log('Successfully get files.', data);
 
      const fileDatas = data.Contents;
 
      fileDatas.forEach(function (file) {
        fileUploads.push(new FileUpload(file.Key, 'https://s3.amazonaws.com/' + params.Bucket + '/' + file.Key));
      });
    });
    
    return Observable.of(fileUploads);
  }
   
  }


  

