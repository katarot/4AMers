import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PetService } from '../../../services/pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myObject: FileReader;
  constructor(private router: Router, private loginSrv: CookieService) { }


  username: string;
  url: any;
  imageSrc: any;

  ngOnInit() {
    //console.log(this.loginSrv.get('username1'));
  }

  login() {
    this.loginSrv.set('username1', this.username, 2);
    //console.log(this.loginSrv.get('username1'));
    this.router.navigate(['/register']);
  }

  onFileChanged(event: any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL( <File> event.target.files[0]); // read file as data url
  
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
        console.log(event.target);
        console.log(this.url);

      }
    }
  }
  
}
