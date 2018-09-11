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

  constructor(private router: Router, private loginSrv: CookieService) { }


  username: string;

  ngOnInit() {
    //console.log(this.loginSrv.get('username1'));
  }

  login() {
    this.loginSrv.set('username1', this.username, 2);
    //console.log(this.loginSrv.get('username1'));
    this.router.navigate(['/register']);
  }
  
}
