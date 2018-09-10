import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { PetService } from '../../../services/pet.service';
import { Users } from '../../models/users.model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private router: Router, private petSrv: PetService) { }


  private users: Users[] = [];
  private username: string;
  private password: string;
  //private cpassword: string; to confirm password, additional stuff
  private firstname: string;
  private lastname: string;
  private email: string;
  private aboutme: string;

  ngOnInit() {
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

}
