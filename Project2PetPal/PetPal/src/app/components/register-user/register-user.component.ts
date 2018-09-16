import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { Users } from '../../models/users.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private loginSrv: CookieService, private router: Router, private petSrv: PetService) { }


  private users: Users[] = [];
  private username: string;
  private password: string;
  //private cpassword: string; to confirm password, additional stuff
  private firstname: string;
  private lastname: string;
  private email: string;
  private aboutme: string;

  ngOnInit() {
    console.log(this.loginSrv.get('username1'))
    this.username = this.loginSrv.get('username1');
  }

  createAccount(){
    console.log("in add user method");

    this.petSrv.createAccount(
      this.username, 
      this.password, 
      this.firstname, 
      this.lastname, 
      this.email, 
      this.aboutme
    ).subscribe(
      data => {
        console.log(data);
        this.users = data;
      }


    )
    
  }

  logout() {
    this.loginSrv.deleteAll();
  }

}
