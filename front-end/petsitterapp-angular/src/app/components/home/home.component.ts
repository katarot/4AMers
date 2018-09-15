import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './../../services/auth.service';
import { User } from '../../models/user.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  closeResult: string;

  private username: string;
  private password: string;
  private user: User;
  private users: User[];
  private invalidLogin: boolean;

  // private firstname: string;
  // private lastname: string;
  // private email: string;
  // private regUsername: string;
  // private regPassword: string;
  // private bioDescription: string;

  private firstname = '';
  private lastname = '';
  private email = '';
  private regUsername = '';
  private regPassword = '';
  private bioDescription = '';

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private auth: AuthService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.invalidLogin = false;
    // this.firstname = '';
    // this.lastname = '';
    // this.email = '';
    // this.regUsername = '';
    // this.regPassword = '';
    // this.bioDescription = '';
  }

  login() {
    this.auth.login(this.username, this.password).subscribe(
      data => {
        this.user = data;
        if (this.user.id === 0) { // incorrect login information
          this.invalidLogin = true;
        } else {  // correct login information
          this.cookieService.deleteAll(); // do we need this?
          // this.cookieService.set('username', this.user.username, 2); // will expire in 2 days
          // this.cookieService.set('password', this.user.password, 2);
          // this.cookieService.set('firstname', this.user.firstName, 2);
          // this.cookieService.set('lastname', this.user.lastName, 2);
          // this.cookieService.set('email', this.user.email, 2);
          // this.cookieService.set('bioDescription', this.user.bioDescription, 2);
          this.cookieService.set('user', JSON.stringify(this.user));
          console.log(this.cookieService.getAll());
          this.invalidLogin = false;
          this.router.navigate(['/psHomeComponent']);
        }
      }
    );
  }

  register() {
    console.log('in register method');
    console.log('firstname = ' + this.firstname);
    console.log('lastname = ' + this.lastname);
    console.log('username = ' + this.regUsername);
    console.log('password = ' + this.regPassword);
    console.log('email = ' + this.email);
    console.log('bioDescription = ' + this.bioDescription);
    this.user = {
      // id: 0,
      username: this.regUsername,
      password: this.regPassword,
      firstName: this.firstname,
      lastName: this.lastname,
      email: this.email,
      dateRegistered: '2018-09-14',
      bioDescription: 'this.bioDescription'
      // username: 'regusername',
      // password: 'password',
      // firstName: 'this.firstname',
      // lastName: 'this.lastname',
      // email: 'this.email',
      // dateRegistered: '2018-09-14',
      // bioDescription: 'this.bioDescription'
    };
    // this.users[0] = this.user;
    console.log(this.user);

    // this.users = [
    //   {
    //     username: this.regUsername,
    //     password: this.regPassword,
    //     firstName: this.firstname,
    //     lastName: this.lastname,
    //     email: this.email,
    //     dateRegistered: '2018-09-14',
    //     bioDescription: this.bioDescription
    //   }
    // ];
    console.log(this.users);
    // this.auth.register(this.users).subscribe(
    this.auth.register(this.user).subscribe(
      data => {
        this.user = data;
        console.log(this.user);
      }
    );
    // this.router.navigate(['/home']);
  }

}
